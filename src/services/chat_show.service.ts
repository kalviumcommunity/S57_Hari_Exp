"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../prisma/prisma";
import { users } from "./auth.service";

export const content = async () => {
  const session = await users();
  const userss = await prisma.user.findFirst({
    where: {
      email: session.user?.email!,
    },
  });
  const s = await prisma.chat.findMany({
    where: {
      userId: userss?.id,
    },
    include: {
      AiMessage: {
        select: {
          content: true,
        },
      },
      UserMessage: {
        select: {
          content: true,
        },
      },
    },
  });
  return s;
};
// export const userChat = async () => {
//   const session = await user();
//   const users = await prisma.user.findFirst({
//     where: {
//       email: session.user?.email!,
//     },
//   });
//   const chat = await prisma.userMessage.findMany({
//     where: {
//       userId: users?.id,
//     },
//   });
//   return chat;
// };

// export const aiChat = async () => {
//   const session = await user();
//   const users = await prisma.user.findFirst({
//     where: {
//       email: session.user?.email!,
//     },
//   });
//   const chat = await prisma.aiMessage.findMany({
//     where: {
//       chat: {
//         userId: users?.id,
//       },
//     },
//   });
//   revalidatePath("/synro");
//   return chat;
// };
