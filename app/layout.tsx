import type { Metadata } from "next";
import { Vazirmatn, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// من معمولا فونت هارو در پوشه پابلیک به صورت استاتیک نگه داری میکنم ولی به خاطر اینکه اینجا فقط یک فونت هست و میخوام از قابلیت های 
// next/font استفاده کنم، از این روش استفاده کردم.

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "مدیریت کاربران",
  description: "چالش فرانت‌اند — صفحه مدیریت کاربران با Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn("h-full", "antialiased", vazirmatn.variable, geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col font-(family-name:--font-vazirmatn)">
        {children}
      </body>
    </html>
  );
}