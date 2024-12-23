import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FitnessXia - Get Healthy Body With Perfect Exercises",
  description: "Transform your body with expert-led fitness programs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

