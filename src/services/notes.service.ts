"use server";

import { redis } from "@/lib/redis";
import { prisma } from "../../prisma/prisma";
import { users } from "./auth.service";

export async function notes() {
  try {
    const email = await users();
    const id = await prisma.user.findFirst({
      where: {
        email: email?.user?.email,
      },
    });
    // cacheNotes(id?.id!);
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
    });
    return notes;
  } catch (error) {
    console.log(error);
  }
}

export async function cacheNotes(userid: string) {
  const postId = `user:${userid}`;
  const notes = await redis.hgetall(postId);
  if (!notes) {
    return {
      response: "not found",
    };
  }
  console.log(notes);
  return {
    notes,
  };
}
