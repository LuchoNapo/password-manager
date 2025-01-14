import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Password Manager",
  description: "A password manager made with Next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${poppins.className} antialiased transition-all duration-400`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader />

          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
