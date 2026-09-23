import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { sitePath } from "./paths";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://night-personal-archive.renazir.chatgpt.site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Personal Archive · 个人档案",
  description:
    "艺术、思想与科技，在这里相遇。A personal archive of art, ideas and technology.",
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
  },
  openGraph: {
    title: "Personal Archive · 个人档案",
    description:
      "艺术、思想与科技，在这里相遇。A personal archive of art, ideas and technology.",
    images: [{ url: sitePath("/og.png"), width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Archive · 个人档案",
    description:
      "艺术、思想与科技，在这里相遇。A personal archive of art, ideas and technology.",
    images: [sitePath("/og.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script src={sitePath("/reveal.js")} defer />
      </body>
    </html>
  );
}
