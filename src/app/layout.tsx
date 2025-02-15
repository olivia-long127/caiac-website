// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "CAIAC",
  description: "Website for the Columbia AI Alignment Club",
  icons: {
    icon: '/logo.svg',
    apple: '/logo.png',
  },
  keywords: [
    "AI", 
    "AI Safety", 
    "AI Club",
    "AI Policy",
    "AI Alignment", 
    "AI Research",
    "Columbia University", 
    "Columbia University AI Club",
    "Columbia AI",
    "Columbia AI Club",
    "Club",
    "CAIAC",
    "Research"
  ],
  author: "Columbia AI Alignment Club",
  openGraph: {
    title: "CAIAC",
    description: "Website for the Columbia AI Alignment Club",
    image: "/logo.png",
    url: "https://www.cualignment.org/",
    type: "website",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Columbia AI Alignment Club",
    "url": "https://www.cualignment.org/",
    "logo": "/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/columbia-ai-alignment-club/"
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GJXS1B9ZXK"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GJXS1B9ZXK');
          `}
        </script>

        {/* Meta Tags for SEO */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify(metadata.structuredData)}
        </script>
      </head>
      
      <body>
        <Navbar />
        <main style={{ padding: "2rem" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
