import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'grafx-design-studio-2023',
  description: 'Unlock the Power of Creative Excellence with Grafx Design Studio! Discover innovative graphic design solutions, bespoke branding, and captivating visual content that elevates your brand. Explore our portfolio today.  This meta description provides a brief, engaging overview of what visitors can expect when they click on your website.It emphasizes creativity, graphic design expertise, and the potential for branding and visual content services, enticing users to explore further.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
