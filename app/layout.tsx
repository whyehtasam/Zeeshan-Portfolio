import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zeeshan Ahmad Ansari - Data Scientist & AI/ML Engineer",
  description:
    "Portfolio of Zeeshan Ahmad Ansari - MS in Analytics graduate specializing in AI/ML, data science, and embedded systems. Transforming data into actionable insights.",
  keywords:
    "Data Scientist, AI Engineer, Machine Learning, Analytics, Embedded Systems, Python, TensorFlow, Data Analytics",
  authors: [{ name: "Zeeshan Ahmad Ansari" }],
  openGraph: {
    title: "Zeeshan Ahmad Ansari - Data Scientist & AI/ML Engineer",
    description: "Portfolio showcasing expertise in AI/ML, data science, and embedded systems",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
