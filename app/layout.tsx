import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PayBook — HR & Payroll. Simplified.",
  description:
    "PayBook is the modern HRMS & Payroll solution trusted by growing businesses. From onboarding to payroll, all automated in one platform.",
  keywords: [
    "HRMS",
    "Payroll Software",
    "HR Management",
    "Attendance Tracking",
    "Employee Management",
    "PayBook",
    "UnitySoftTech",
  ],
  authors: [{ name: "UnitySoftTech" }],
  openGraph: {
    title: "PayBook — HR & Payroll. Simplified.",
    description:
      "The modern HR & Payroll solution trusted by 500+ companies. Automate attendance, payroll, recruitment, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} font-dm bg-brand-light text-brand-slate antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
