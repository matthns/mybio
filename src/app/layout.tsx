import "./globals.css";
import type { Metadata } from "next";
import { Red_Hat_Display, Barlow, Manrope } from "next/font/google";
import Providers from "./components/Providers";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"],
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
      <body className={`${manrope.className} bg-[#000413] text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
