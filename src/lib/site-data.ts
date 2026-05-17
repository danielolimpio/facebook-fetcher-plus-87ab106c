import { Instagram, Youtube, Music2, Waves, Twitter } from "lucide-react";

export const SITE = {
  brand: "FaceSave",
  brandSub: "Video Downloader",
  domain: "baixarvideosfacebook.com",
  version: "v2.0",
  locale: "PT-BR",
  year: 2026,
};

export const OTHER_DOWNLOADERS = [
  { label: "Baixar Instagram", href: "/baixar-instagram", icon: Instagram, color: "#E1306C" },
  { label: "Baixar YouTube", href: "/baixar-youtube", icon: Youtube, color: "#FF0000" },
  { label: "Baixar TikTok", href: "/baixar-tiktok", icon: Music2, color: "#111111" },
  { label: "Baixar Kwai", href: "/baixar-kwai", icon: Waves, color: "#FF6A00" },
  { label: "Baixar Twitter", href: "/baixar-twitter", icon: Twitter, color: "#111111" },
] as const;

export const FOOTER_LINKS = [
  { label: "Termos de Uso", href: "/termos" },
  { label: "Privacidade", href: "/privacidade" },
  { label: "Uso Responsável", href: "/uso-responsavel" },
  { label: "DMCA", href: "/dmca" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
  { label: "Sobre", href: "/sobre" },
] as const;
