"use server";
import { revalidatePath } from "next/cache";
import prisma from "../../prisma/prisma";
import { users } from "./auth.service";
import { redis } from "@/lib/redis";

export async function delete_note(noteId: string) {
  const user = await users();
  if (!user.user?.email) {
    return {
      message: "You do not have permission to delete",
    };
  }
  const userId = await prisma.user.findFirst({
    where: {
      email: user.user.email,
    },
  });
  const notebook = await prisma.nootbook.findFirst({
    where: {
      userId: userId.id,
    },
  });
  const note = await prisma.note.delete({
    where: {
      nootbookId: notebook?.id,
      id: noteId,
    },
  });
  // const post = `user:${userId}`;
  // const data = await redis.hdel(post);
  if (!note) {
    return {
      message: "Try again",
    };
  }
  revalidatePath("nootbook/overview");
  return {
    message: "deleted successfully",
  };
}
