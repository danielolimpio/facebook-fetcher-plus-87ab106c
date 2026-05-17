export interface DownloadItem {
  id: string;
  url: string;
  title: string;
  type: "video" | "reel" | "story" | "photo" | "audio";
  quality: string;
  thumbnail?: string;
  createdAt: number;
}

const KEY = "fb_downloads_v1";

export function getDownloads(): DownloadItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function addDownload(item: Omit<DownloadItem, "id" | "createdAt">) {
  if (typeof window === "undefined") return;
  const list = getDownloads();
  const next: DownloadItem = {
    ...item,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
  };
  list.unshift(next);
  localStorage.setItem(KEY, JSON.stringify(list.slice(0, 100)));
  window.dispatchEvent(new Event("fb_downloads_updated"));
}

export function clearDownloads() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("fb_downloads_updated"));
}

export function removeDownload(id: string) {
  if (typeof window === "undefined") return;
  const list = getDownloads().filter((d) => d.id !== id);
  localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("fb_downloads_updated"));
}

export function isValidFacebookUrl(url: string) {
  return /(?:facebook\.com|fb\.watch|fb\.com|m\.facebook\.com)\//i.test(url.trim());
}

export function detectType(url: string): DownloadItem["type"] {
  const u = url.toLowerCase();
  if (u.includes("/reel")) return "reel";
  if (u.includes("/stories") || u.includes("/story")) return "story";
  if (u.includes("/photo")) return "photo";
  return "video";
}
