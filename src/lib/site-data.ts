import logoInstagram from "@/assets/logo-instagram.png";
import logoYoutube from "@/assets/logo-youtube.png";
import logoTiktok from "@/assets/logo-tiktok.webp";
import logoKwai from "@/assets/logo-kwai.png";
import logoTwitter from "@/assets/logo-twitter.jpg";

export const SITE = {
  brand: "FaceSave",
  brandSub: "Video Downloader",
  domain: "baixarvideosfacebook.com",
  version: "v2.0",
  locale: "PT-BR",
  year: 2026,
};

export interface DownloaderLink {
  label: string;
  href: string;
  url: string;
  logo: string;
  color: string;
}

export const OTHER_DOWNLOADERS: DownloaderLink[] = [
  { label: "Baixar Instagram", href: "/baixar-instagram", url: "https://baixarvideosinstagram.com", logo: logoInstagram, color: "#E1306C" },
  { label: "Baixar YouTube", href: "/baixar-youtube", url: "https://baixarvideoyoutube.com", logo: logoYoutube, color: "#FF0000" },
  { label: "Baixar TikTok", href: "/baixar-tiktok", url: "https://baixarvideostiktok.com", logo: logoTiktok, color: "#111111" },
  { label: "Baixar Kwai", href: "/baixar-kwai", url: "https://baixarvideoskwai.com", logo: logoKwai, color: "#FF6A00" },
  { label: "Baixar Twitter", href: "/baixar-twitter", url: "https://baixarvideostwitter.com", logo: logoTwitter, color: "#111111" },
];

export const FOOTER_LINKS = [
  { label: "Termos de Uso", href: "/termos" },
  { label: "Privacidade", href: "/privacidade" },
  { label: "Uso Responsável", href: "/uso-responsavel" },
  { label: "DMCA", href: "/dmca" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
  { label: "Sobre", href: "/sobre" },
] as const;
