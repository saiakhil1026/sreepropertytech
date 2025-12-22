
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client using process.env.API_KEY directly as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPropertyAdvice = async (query: string) => {
  try {
    // Using gemini-3-flash-preview for high-speed, cost-effective chat interactions.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: `You are an elite, professional NRI property consultant for SreePropertyTech. 
        SreePropertyTech provides end-to-end luxury property management in India for NRIs living abroad.
        Your tone should be sophisticated, reassuring, knowledgeable, and professional. 
        Focus on legal transparency, high ROI, property maintenance, and tax implications (TDS, GST) for NRIs. 
        Keep responses concise and formatted with markdown for readability.`,
        temperature: 0.7,
      },
    });
    // Extracting the text content directly from the .text property of the response.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm currently unable to assist. Please contact our concierge directly at +91 800-ELITE-NRI.";
  }
};
