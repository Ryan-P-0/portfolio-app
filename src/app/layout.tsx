import SimpleSidebar from "@/components/Sidebar";
import { Providers } from "./providers";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Experienced React Developer',
  description: 'I am a web developer and programmer with experience in React, including: functional components, React hooks, modern ES6+ JavaScript, TypeScript, Next.js framework, Jest unit testing, Cypress end-to-end testing, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <SimpleSidebar>
            {children}
          </SimpleSidebar>
        </Providers>
      </body>
    </html>
  )
}
