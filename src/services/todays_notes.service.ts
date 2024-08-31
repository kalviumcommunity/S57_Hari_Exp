"use server";

import { prisma } from "../../prisma/prisma";
import { users } from "./auth.service";

export async function todaysNotes() {
  const dates = new Date();
  const currentdate = dates.toLocaleDateString();
  console.log(currentdate);
  const user = await users();

  const userId = await prisma.user.findFirst({
    where: {
      email: user?.user?.email,
    },
  });
  console.log(userId);
  if (!user) {
    return;
  }

  const nootbook = await prisma.nootbook.findFirst({
    where: {
      userId: userId?.id,
    },
  });
  const notes = await prisma.note.findMany({
    where: {
      nootbookId: nootbook.id,
    },
    select: {
      createdAt: true,
      notes: true,
      tag: true,
    },
  });

  const note = notes.filter(
    (note) => note.createdAt.toLocaleDateString() === currentdate
  );
  if (!note) {
    return;
  }
  return note;
}
