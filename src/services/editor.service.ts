"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_GEMINI_API;
const genAi = new GoogleGenerativeAI(apiKey!);
const model = genAi.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  },
});
const chatSession = model.startChat({
  history: [],
});

export const aiEditor = async (data?: string) => {
  try {
    const billionaire = await chatSession.sendMessage(data!);
    const llema = billionaire.response.text();
    console.log(llema);
    return llema;
  } catch (error) {
    console.log(error);
  }
};
