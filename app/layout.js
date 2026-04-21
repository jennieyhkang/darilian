jsimport { Inter } from "next/font/google";
import "./globals.css";
import { UmamiAnalytics } from "./UmamiAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Darilian — Asia-Pacific engineers for US companies",
  description:
    "A managed remote staffing platform connecting Asia-Pacific's best engineers to US companies. Fully remote, no visa required.",
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
        <UmamiAnalytics />
      </body>
    </html>
  );
}
