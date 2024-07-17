"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "../../prisma/prisma";
import { users } from "./auth.service";
import { revalidatePath, revalidateTag } from "next/cache";
import { randomBytes } from "crypto";
import { redis } from "@/lib/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { headers } from "next/headers";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API;
const genAi = new GoogleGenerativeAI(apiKey!);
const model = genAi.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 200,
    responseMimeType: "text/plain",
  },
});
const ChatSession = model.startChat({
  history: [],
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(40, "10s"),
});
export async function sendChat(data: string) {
  const ip = headers().get("x-forwared-for");
  const { limit, success } = await ratelimit.limit(ip);
  if (!success) {
    return {
      llema: "excceeded",
    };
  }
  const session = await users();
  const uuid = crypto.randomUUID();

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
    revalidateTag("/syncro");
  } catch (error) {
    console.log(error);
  }
}

export async function deletes() {
  const session = await users();
  const userss = await prisma.user.findFirst({
    where: {
      email: session.user?.email!,
    },
  });
  const d = await prisma.userMessage.deleteMany({
    where: {
      userId: userss?.id,
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
