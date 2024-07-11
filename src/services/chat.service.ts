"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import prisma from "../../prisma/prisma";
import { users } from "./auth.service";
import { revalidatePath } from "next/cache";
import { randomBytes } from "crypto";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API;
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
const ChatSession = model.startChat({
  history: [],
});
export async function sendChat(data: string) {
  const session = await users();
  const uuid = randomBytes(256).BYTES_PER_ELEMENT.toString();
  try {
    // create chat session
    const user = await prisma.user.findFirst({
      where: {
        email: session.user?.email!,
      },
    });
    let chatModel = await prisma.chat.findFirst({
      where: {
        userId: user?.id,
      },
    });
    if (!chatModel) {
      chatModel = await prisma.chat.create({
        data: {
          userId: user?.id,
        },
      });
    }
    if (!user) {
      return;
    }

    const storeUserChat = await prisma.userMessage.create({
      data: {
        content: data,
        chatId: chatModel.id,
        userId: user.id,
        match: uuid,
      },
    });
    if (storeUserChat) {
      revalidatePath("/syncro");
      console.log(storeUserChat);
    }
    const chat = await ChatSession.sendMessage(data);
    const sendChat = chat.response.text();
    const storeAiChat = await prisma.aiMessage.create({
      data: {
        content: sendChat,
        chatId: chatModel.id,
        match: uuid,
      },
    });
    if (storeAiChat) {
      console.log(storeAiChat);
    }
    revalidatePath("/syncro");
  } catch (error) {
    console.log(error);
  }
}

export async function deletes() {
  const session = await user();
  const users = await prisma.user.findFirst({
    where: {
      email: session.user?.email!,
    },
  });
  const d = await prisma.userMessage.deleteMany({
    where: {
      userId: users?.id,
    },
  });
  const l = await prisma.aiMessage.deleteMany({
    where: {
      chat: {
        userId: users?.id,
      },
    },
  });
}
