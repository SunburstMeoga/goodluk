import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GOODLUK",
  description: "GOODLUK Electric Vehicle is committed to delivering high-quality, eco-friendly, and efficient electric mobility solutions to customers worldwide. Combining cutting-edge technology with exceptional design, we create electric vehicles with outstanding performance, long-lasting battery life, and smart features. Explore a wide range of models, innovative configurations, and dedicated after-sales services, and experience the future of green transportation with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
