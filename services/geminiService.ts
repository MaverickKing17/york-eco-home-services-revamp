
import { GoogleGenAI, Type, Chat, FunctionDeclaration } from "@google/genai";

const MODEL_NAME = 'gemini-3-flash-preview';

export interface SavingsReport {
  estimatedSavings: string;
  recommendedUpgrades: string[];
  eligibleRebates: string;
  proTip: string;
}

const startSavingsAssessmentDeclaration: FunctionDeclaration = {
  name: 'startSavingsAssessment',
  parameters: {
    type: Type.OBJECT,
    description: 'Trigger the interactive Home Energy Savings Assessment tool for the user.',
    properties: {
      reason: {
        type: Type.STRING,
        description: 'Brief reason why the assessment is being suggested (e.g., user asked about rebates).',
      },
    },
    required: ['reason'],
  },
};

const COMPANY_KNOWLEDGE = `
You are the "Eco-Advisor", the official AI Assistant for York Eco-Home Services Inc. 

Company Profile:
- Full Name: York Eco-Home Services Inc.
- Phone: 1-888-227-6566 (Toll-Free)
- Local Phone: (416) 227-6566
- Licensing: TSSA Licensed (License #FS-R-50611). Mandatory for HVAC in Ontario.
- Ratings: HomeStars Elite with a 5/5 Perfect Rating.

Interaction Rules:
1. Tone: Professional HVAC expert. Use concise bullet points.
2. Lead Generation: If a user asks for a quote or has an emergency, instruct them to call 1-888-227-6566.
3. Function Calling: If they mention "savings", "rebates", or "assessment", use 'startSavingsAssessment'.
4. Rebates: Always mention the Enbridge HER+ program and potential for up to $7,000 back.
`;

export const startAIChatSession = (): Chat => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  return ai.chats.create({
    model: MODEL_NAME,
    config: {
      systemInstruction: COMPANY_KNOWLEDGE,
      tools: [{ functionDeclarations: [startSavingsAssessmentDeclaration] }],
    },
  });
};

export const getSavingsAssessment = async (homeData: {
  houseType: string;
  currentHeating: string;
  ageOfEquipment: string;
  zipCode: string;
}): Promise<SavingsReport> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Analyze this Ontario home for HVAC energy efficiency and rebates:
    - House Type: ${homeData.houseType}
    - Current Heating: ${homeData.currentHeating}
    - Equipment Age: ${homeData.ageOfEquipment}
    - Location: ${homeData.zipCode} (GTA Area)

    Return a professional assessment focusing on Enbridge Gas HER+ incentives up to $7,000.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedSavings: {
              type: Type.STRING,
              description: "Brief estimation of annual energy savings (e.g. '20-30%')",
            },
            recommendedUpgrades: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Top 2-3 recommended HVAC upgrades",
            },
            eligibleRebates: {
              type: Type.STRING,
              description: "Summary of specific rebates they qualify for",
            },
            proTip: {
              type: Type.STRING,
              description: "One expert tip for the homeowner",
            },
          },
          required: ["estimatedSavings", "recommendedUpgrades", "eligibleRebates", "proTip"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from AI");
    
    // Attempt to clean JSON if model returns markdown blocks
    const cleanJson = text.replace(/```json|```/g, '').trim();
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("AI Assessment Error:", error);
    // Return a fallback report if the service is unreachable
    return {
      estimatedSavings: "Up to 30% reduction",
      recommendedUpgrades: ["Heat Pump Retrofit", "Smart Thermostat Installation"],
      eligibleRebates: "You likely qualify for the Enbridge HER+ program (up to $7,100).",
      proTip: "Call 1-888-227-6566 to book a pre-audit and lock in your rebate status."
    };
  }
};
