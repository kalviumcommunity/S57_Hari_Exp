import { z } from "zod";

export const formSchema = z.object({
  chat: z.string().min(1),
});

export function tag(taag: string) {
  const tag = taag;
  const slug = tag
    ?.replace(/<.*?>/gm, "")
    .replace(/ /g, "_")
    .match(/^(\w+\s+){0,3}(\w+)/);
  if (!slug) {
    return;
  }
  return slug[0];
}

export function description(taag: string) {
  const tag = taag;
  const slug = tag
    ?.replace(/<.*?>/gm, "")
    .replace(/ /g, " ")
    .match(/^(\w+\s+){0,6}(\w+)/);
  if (!slug) {
    return;
  }
  console.log(slug[0]);
  return slug[0];
}
