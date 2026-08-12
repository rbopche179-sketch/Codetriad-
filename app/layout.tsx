import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CodeTriad Group — Innovation • Technology • Teamwork",
  description:
    "CodeTriad Group builds innovative software, web, mobile, and AI-driven solutions through collaboration and craft.",
  keywords: ["software development", "web development", "AI", "machine learning", "cloud", "CodeTriad"],
  openGraph: {
    title: "CodeTriad Group",
    description: "Innovation • Technology • Teamwork",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#0a0f1c",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body>{children}</body>
    </html>
  )
}
