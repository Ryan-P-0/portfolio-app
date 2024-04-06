import SimpleSidebar from "@/components/Sidebar";
import { Providers } from "./providers";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Experienced Brisbane Web Developer",
  description: "Brisbane web developer with industry experience in software development. I provide modern application and website development services for businesses.",
  keywords: [
    "web developer brisbane",
    "freelance web developer brisbane",
    "brisbane website",
    "brisbane web design",
    "brisbane web developer",
    "brisbane website builders",
    "brisbane web hosting",
    "brisbane website hosting",
    "best brisbane web developers",
    "web developer brisbane",
    "website developer brisbane",
    "website wordpress developer brisbane",
    "freelance web developer brisbane",
    "app developer brisbane",
    "react developer brisbane",
    "software developer brisbane",
    "shopify developer brisbane",
    "software developer brisbane qld",
    "wordpress brisbane",
    "wordpress training brisbane",
    "wordpress developer brisbane",
    "wordpress seo brisbane",
    "website developer near me",
    "app developer near me",
    "web developer near me",
    "software developer near me",
    "wordpress developer near me",
    "react developer near me",
  ],
};

// export const metadata: Metadata = {
//   title: "Elastic Stack, Next.js, Python, JavaScript Tutorials | dminhvu",
//   description:
//     "dminhvu.com - Programming blog for everyone to learn Elastic Stack, Next.js, Python, JavaScript, React, Machine Learning, Data Science, and more.",
//   keywords: [
//     "elastic",
//     "python",
//     "javascript",
//     "react",
//     "machine learning",
//     "data science"
//   ],
//   openGraph: {
//     url: "https://dminhvu.com",
//     type: "website",
//     title: "Elastic Stack, Next.js, Python, JavaScript Tutorials | dminhvu",
//     description:
//       "dminhvu.com - Programming blog for everyone to learn Elastic Stack, Next.js, Python, JavaScript, React, Machine Learning, Data Science, and more.",
//     images: [
//       {
//         url: "https://dminhvu.com/images/home/thumbnail.png",
//         width: 1200,
//         height: 630,
//         alt: "dminhvu"
//       }
//     ]
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Elastic Stack, Next.js, Python, JavaScript Tutorials | dminhvu",
//     description:
//       "dminhvu.com - Programming blog for everyone to learn Elastic Stack, Next.js, Python, JavaScript, React, Machine Learning, Data Science, and more.",
//     creator: "@dminhvu02",
//     site: "@dminhvu02",
//     images: [
//       {
//         url: "https://dminhvu.com/images/home/thumbnail.png",
//         width: 1200,
//         height: 630,
//         alt: "dminhvu"
//       }
//     ]
//   },
//   alternates: {
//     canonical: "https://dminhvu.com"
//   }
// };

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
