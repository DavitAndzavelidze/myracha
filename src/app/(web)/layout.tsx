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
  description:
    "მოგზაურობა და დასვენება რაჭაში! რაჭა არის საქართველოს ერთ-ერთი ყველაზე მომხიბვლელი და მრავალფეროვანი რეგიონი, მოგზაურობა რაჭაში გახდება თქვენი დაუვიწყარი შთაბეჭდილებების წყარო! Discover the best hotels in Racha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
