"use server";
import { prisma } from "../../prisma/prisma";
import { users } from "./auth.service";

export async function getNotes(tags: string) {
  try {
    const userss = await users();
    const id = await prisma.user.findFirst({
      where: {
        email: userss.user?.email,
        emailVerfied: true,
      },
      cacheStrategy: { swr: 60, ttl: 60 },
    });
    const nootbookid = await prisma.nootbook.findFirst({
      where: {
        userId: id?.id,
      },
      cacheStrategy: { swr: 60, ttl: 60 },
    });
    const nootbook = await prisma.note.findFirst({
      where: {
        nootbookId: nootbookid?.id,
        Nootbook: {
          userId: nootbookid?.userId,
        },
        tag: tags,
      },
      cacheStrategy: { swr: 60, ttl: 60 },
    });
    console.log(nootbook);
    return {
      success: {
        notes: nootbook?.notes,
        id: nootbook?.id,
      },
    };
  } catch (error: any) {
    return {
      error: error,
    };
  }
}
