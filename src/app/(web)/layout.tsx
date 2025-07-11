import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import Toast from "@/components/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Myracha",
  description: "Discover the best hotels in Racha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico?v=2" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider>
          <Toast />
          <main className="font-normal">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
