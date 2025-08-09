import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import StoreProvider from "./StoreProvider";
import Data from "./data-provider";
import Footer from "./components/footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ReadLeaf",
  description: "A website to learn more about books and select your favorites in order to add them to your list.",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
            <Data>
              <Navbar />

              {children}

              <Footer />
            </Data>
        </body>
      </html>
    </StoreProvider>
  );
}
