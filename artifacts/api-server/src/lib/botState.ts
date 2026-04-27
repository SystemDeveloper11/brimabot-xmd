import fs from "fs";
import path from "path";

export const AUTH_DIR = path.resolve("./auth");

export function ensureAuthDir() {
  if (!fs.existsSync(AUTH_DIR)) {
    fs.mkdirSync(AUTH_DIR, { recursive: true });
  }
}

export async function loadSettings() {
  return {
    botName: "MAXX-XMD",
    prefix: ".",
    mode: "public",
  };
}

const sessionStore = new Map<string, any>();

export function saveSessionMeta(id: string, data: any) {
  sessionStore.set(id, data);
}

export function deleteSessionMeta(id: string) {
  sessionStore.delete(id);
}