"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma/prisma";
import { redis } from "@/lib/redis";
import { users } from "./auth.service";

export async function Delete(id: string) {
  const email = await users();
  const userss = await prisma.user.findFirst({
    where: {
      email: email?.user?.email,
    },
  });
  const noteId = await prisma.note.findFirst({
    where: {
      tag: id,
    },
  });
  const post = `user:${userss.id}`;
  const postId = `postId:${noteId?.id}`;
  const deletes = await redis.hdel(post, postId);
  console.log(deletes);
  const note = await prisma.note.delete({
    where: {
      id: noteId?.id,
      tag: id,
    },
  });
  revalidatePath("/nootbook/overview");
  if (note) {
    return {
      success: "deleted ",
    };
  }
}
