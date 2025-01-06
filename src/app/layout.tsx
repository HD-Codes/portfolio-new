import type { Metadata } from "next";
import { Inter, Calistoga} from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import logo from '@/assets/images/myLogo.png';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ 
      subsets: ["latin"],
      variable: "--font-serif",
      weight: ["400"]
});

export const metadata: Metadata = {
  title: "HD-CODES",
  description: "A showcase of my professional journey, technical skills, and projects in software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href={logo.src} type="image/png" />
        <title>My Portfolio</title>
        <meta name="description" content="A portfolio website showcasing my projects and skills." />
      </head>
      <body className={twMerge(
        inter.variable, 
        calistoga.variable, 
        "bg-gray-900 text-white antialiased font-sans"
        )}>{children}</body>
    </html>
  );
}
