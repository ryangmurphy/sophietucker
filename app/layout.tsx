import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
// Comprehensive metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://www.sophietucker.ca"), // Replace with your actual domain
  title: {
    default: "Sophie Tucker | Marketing Professional",
    template: "%s | Sophie Tucker", // Allows dynamic page titles
  },
  description:
    "Experienced Marketing & Digital Content Coordinator specializing in innovative digital strategies and compelling content creation.",

  // Open Graph metadata for social sharing
  openGraph: {
    title: "Sophie Tucker - Marketing Professional",
    description:
      "Experienced Marketing & Digital Content Coordinator specializing in innovative digital strategies and compelling content creation.",
    url: "https://www.sophietucker.ca",
    siteName: "Sophie Tucker Portfolio",
    images: [
      {
        url: "/og-image.png", // Create an Open Graph image
        width: 1200,
        height: 630,
        alt: "Sophie Tucker - Marketing Professional",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Sophie Tucker - Marketing Professional",
    description:
      "Experienced Marketing & Digital Content Coordinator specializing in innovative digital strategies and compelling content creation.",
    images: ["/twitter-image.png"], // Create a Twitter-specific image
  },

  // Additional SEO and verification metadata
  verification: {
    google: "your-google-site-verification-code", // Optional: Google Search Console verification
    // Add other verification codes as needed
  },

  // Robots meta for SEO control
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Alternative formats and links
  alternates: {
    canonical: "https://www.sophietucker.ca",
  },

  // Icons and favicons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#EDD4FB", // Customize to match your brand
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Preload critical assets */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
      </head>
      <body
        // Add accessibility and performance attributes
        className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 animated-background"
      >
        {children}
      </body>
    </html>
  );
}
