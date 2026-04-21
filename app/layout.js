import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Darilian — Asia-Pacific engineers for US companies",
  description:
    "A managed remote staffing platform connecting US companies with Asia-Pacific's best engineers. Fully remote, no visa required.",
  openGraph: {
    title: "Darilian — Asia-Pacific engineers for US companies",
    description: "Fully remote. No visa required. Join the waitlist.",
    url: "https://darilian.com",
    siteName: "Darilian",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="5ce45832-ed11-4cec-9ae3-ca0b70244a4b"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
