
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
- Office Address: 1370 Don Mills Rd, Unit #300, Toronto, ON M3B 3N7
- Licensing: TSSA Licensed (License #FS-R-50611). This is the Technical Standards and Safety Authority, mandatory for HVAC in Ontario.
- Professional Memberships: HRAI Member, HomeStars Elite with a 5/5 Perfect Rating.

Operating Hours:
- Standard Office Hours: Monday to Friday: 8:00 AM – 8:00 PM, Saturday & Sunday: 9:00 AM – 5:00 PM.
- Emergency Services: 24/7/365 Emergency Dispatch. We never close for no-heat situations or gas leak emergencies.

Service Areas:
- Primary: Toronto, North York, Etobicoke, Scarborough.
- Extended: Mississauga, Vaughan, Richmond Hill, Markham, Brampton, and the wider Greater Toronto Area (GTA).

Expertise & Services:
1. Heating: Furnace Repair, Maintenance, and High-Efficiency Gas/Electric Installations. 
2. Cooling: Central AC Repair, Ductless Mini-Splits, and Precision Tune-ups.
3. Eco-Solutions: Heat Pump Retrofitting (Cold-climate air source heat pumps).
4. Rebates: Navigating Enbridge Gas HER+ Program and Canada Greener Homes Grants (up to $7,000 back).
5. Home Comfort: Smart Thermostats (Ecobee/Nest), Indoor Air Quality (HEPA filters, Humidifiers), and Energy Audits.

Interaction Rules:
1. Tone: Professional, authoritative, yet friendly and helpful. You are an expert consultant.
2. Accuracy: Use the specific details above for every answer. Do not hallucinate hours or addresses.
3. Lead Generation: If a user asks for a quote, pricing, or has an emergency, instruct them to call 1-888-227-6566 immediately.
4. Function Calling: If a user mentions "savings", "rebates", "bills", "costs", "assessment", or "consultant", you MUST use the 'startSavingsAssessment' tool to bridge them to the interactive calculator on the page.
5. Formatting: Use concise bullet points for lists. Keep chat responses under 100 words where possible.
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
    - Current Heating Source: ${homeData.currentHeating}
    - Equipment Age: ${homeData.ageOfEquipment}
    - Location: ${homeData.zipCode} (GTA Area)

    Provide a professional assessment of potential savings and rebates (mentioning Enbridge/Government incentives up to $7,000 where applicable).
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
              description: "Summary of specific rebates they likely qualify for",
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

    const result = JSON.parse(response.text || "{}");
    return result;
  } catch (error) {
    console.error("AI Assessment Error:", error);
    throw new Error("Failed to generate assessment. Please try again later.");
  }
};
