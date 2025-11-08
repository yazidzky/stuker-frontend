// src/utils/text.ts

export function limitText(text: string, maxLength: number = 50): string {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + ".." : text;
}
