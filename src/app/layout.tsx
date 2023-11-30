import SimpleSidebar from "@/components/Sidebar";
import { Providers } from "./providers";

export const metadata = {
  title: 'Experienced Web Developer',
  description: 'I am an experienced web developer and programmer with a background in React and WordPress.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SimpleSidebar>
            {children}
          </SimpleSidebar>
        </Providers>
      </body>
    </html>
  )
}
