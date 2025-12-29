
import { GoogleGenAI, Type, Chat } from "@google/genai";

const MODEL_NAME = 'gemini-3-flash-preview';

export interface SavingsReport {
  estimatedSavings: string;
  recommendedUpgrades: string[];
  eligibleRebates: string;
  proTip: string;
}

const COMPANY_KNOWLEDGE = `
You are the official AI Assistant for York Eco Home Services Inc. 
Company Details:
- Name: York Eco Home Services Inc.
- Phone: 1-888-227-6566
- Address: 1370 Don Mills Rd, Unit #300, Toronto, ON M3B 3N7
- Licensing: TSSA License FS-R-50611.
- Reputation: 5/5 HomeStars rating.
- Service Areas: Toronto, North York, Etobicoke, Scarborough, Mississauga, Vaughan, Richmond Hill, and the wider GTA.
- Services: Furnace Repair & Installation (Gas/Electric), Heat Pump Retrofitting, AC Maintenance & Installation, Smart Thermostats, Eco-Home Assessments.
- Speciality: Navigating the Enbridge HER+ and Government Heat Pump Rebates (up to $7,000 back for homeowners).
- Availability: 24/7 Emergency Support.

Your Goal:
1. Be professional, friendly, and expert.
2. Answer questions accurately using the knowledge above.
3. If a user asks for a quote or specific repair advice, encourage them to call 1-888-227-6566 or fill out the assessment form on the page.
4. Keep responses concise and formatted for a chat bubble.
`;

export const startAIChatSession = (): Chat => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  return ai.chats.create({
    model: MODEL_NAME,
    config: {
      systemInstruction: COMPANY_KNOWLEDGE,
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
