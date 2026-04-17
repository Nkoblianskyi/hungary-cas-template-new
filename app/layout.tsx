import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "Legjobb online kaszinók Magyarországon 2026 | Legmagasabbra értékelt oldalak",
  description:
    "Fedezze fel 2026 legjobb online kaszinóit Magyarországon. Hasonlítsa össze a bónuszokat, értékeléseket és funkciókat. Megbízható, gyors kifizetés és ügyfélszolgálat.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
