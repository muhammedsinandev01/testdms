import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dock Media School | Build Your Media Career Inside the Industry",
  description: "A professional media institution built inside the industry. Learn by creating, producing, and delivering actual work that matters. Courses in Digital Marketing, Content Creation, Video Editing, and Marketing.",
  keywords: "Dock Media School, media school, digital marketing, content creation, video editing, marketing school, media institute, Kochi, Kerala, Dubai, media careers",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" }
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${dmSans.variable} h-full antialiased dark`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full bg-[#0A101E] text-[#FFFFFF] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
