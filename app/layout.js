import { Inter } from "next/font/google"
import "./main.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Next Weather",
  description: "A small weather app build on Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
