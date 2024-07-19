"use server";

import { redis } from "@/lib/redis";
import { prisma } from "../../prisma/prisma";
import { users } from "./auth.service";
import { revalidatePath } from "next/cache";

export async function notes() {
  try {
    const email = await users();
    const id = await prisma.user.findFirst({
      where: {
        email: email?.user?.email,
      },
    });
    cacheNotes(id?.id!);
    const notes = await prisma.nootbook.findMany({
      where: {
        userId: id?.id,
      },
      select: {
        notes: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
      // cacheStrategy: { swr: 60, ttl: 60 },
    });
    return notes;
  } catch (error) {
    console.log(error);
  }
}

async function cacheNotes(userid: string) {
  const postId = `user:${userid}`;
  const notes = await redis.hgetall(postId);
  console.log(notes);
  revalidatePath("/nootbook/overview");
  return {
    notes,
  };
}
