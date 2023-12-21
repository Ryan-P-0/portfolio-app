import SimpleSidebar from "@/components/Sidebar";
import { Providers } from "./providers";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Experienced Web Developer",
  description: "I am an experienced web developer and programmer with a background in React and WordPress.",
  keywords: [
    "web developer brisbane",
    "freelance web developer brisbane",
    "experienced web developer brisbane",
    "brisbane web developer",
    "brisbane freelance web developer",
    "brisbane experienced web developer",
    "react developer brisbane",
    "freelance react developer brisbane",
    "experienced react developer brisbane",
    "brisbane react developer",
    "brisbane freelance react developer",
    "brisbane experienced react developer",
    "wordpress developer brisbane",
    "freelance wordpress developer brisbane",
    "experienced wordpress developer brisbane",
    "brisbane wordpress developer",
    "brisbane freelance wordpress developer",
    "brisbane experienced wordpress developer",
  ],
};

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
