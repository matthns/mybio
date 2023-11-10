import "./globals.css";
import type { Metadata } from "next";
import { Red_Hat_Display, Barlow } from "next/font/google";
import Providers from "./components/Providers";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Matheus Nascimento | My Bio",
  description: "Front-end developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow.className} bg-[#000413] text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
