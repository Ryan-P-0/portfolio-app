import SimpleSidebar from "@/components/Sidebar";
import { Providers } from "./providers";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

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
      <body className={montserrat.className}>
        <Providers>
          <SimpleSidebar>
            {children}
          </SimpleSidebar>
        </Providers>
      </body>
    </html>
  )
}
