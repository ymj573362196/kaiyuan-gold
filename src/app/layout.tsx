import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "开元金币 - 专注熊猫金币与贵金属收藏投资",
    template: "%s | 开元金币",
  },
  description:
    "开元金币官网，专注熊猫金币、熊猫银币、金银纪念币及贵金属收藏品。提供专业的贵金属投资与收藏指导服务。中国金币收藏投资高端品牌。",
  keywords: [
    "开元金币",
    "熊猫金币",
    "金银纪念币",
    "贵金属投资",
    "收藏金币",
    "熊猫银币",
    "投资金币",
    "金币收藏",
    "贵金属收藏",
  ],
  authors: [{ name: "开元金币" }],
  creator: "开元金币",
  publisher: "开元金币",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.kaiyuangold.com",
    siteName: "开元金币",
    title: "开元金币 - 专注熊猫金币与贵金属收藏投资",
    description:
      "开元金币官网，专注熊猫金币、熊猫银币、金银纪念币及贵金属收藏品。提供专业的贵金属投资与收藏指导服务。",
  },
  twitter: {
    card: "summary_large_image",
    title: "开元金币 - 专注熊猫金币与贵金属收藏投资",
    description:
      "开元金币官网，专注熊猫金币、熊猫银币、金银纪念币及贵金属收藏品。",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
