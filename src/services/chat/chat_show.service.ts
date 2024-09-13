"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/prisma";
import { users } from "../auth/auth.service";

export const content = async () => {
  try {
    const session = await users();
    const userss = await prisma.user.findFirst({
      where: {
        email: session.user?.email!,
      },
    });
    const s = await prisma.syncroChat.findMany({
      where: {
        userId: userss?.id,
      },

      include: {
        SyncroMessage: {
          select: {
            chat: true,
            role: true,
          },
        },
      },
    });
    revalidatePath("/synro");
    console.log(s);
    return s;
  } catch (error) {
    console.log(error);
    return {
      error,
    };
  }
};
