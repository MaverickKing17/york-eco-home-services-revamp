
import { GoogleGenAI, Type } from "@google/genai";

const MODEL_NAME = 'gemini-3-flash-preview';

export interface SavingsReport {
  estimatedSavings: string;
  recommendedUpgrades: string[];
  eligibleRebates: string;
  proTip: string;
}

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
