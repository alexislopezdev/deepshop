import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deepshop | Desarrollo de Ecommerce",
  description:
    "Desarrollamos tiendas online a medida. Shopify, WooCommerce y soluciones custom con tecnología de punta.",
  keywords: "ecommerce, desarrollo web, tienda online, shopify, deepshop",
  openGraph: {
    title: "Deepshop | Desarrollo de Ecommerce",
    description:
      "Desarrollamos tiendas online a medida. Shopify, WooCommerce y soluciones custom.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${archivoBlack.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
