import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "./components/Providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
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
      <body
        className={`${roboto.className} font-light bg-[#000413] text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
