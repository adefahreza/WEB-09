import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Pustaka Senja",
  description: "Temukan buku favoritmu dan jelajahi berbagai pengetahuan baru.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      {/* min-h-screen + flex-col + flex-1 pada <main> membuat footer selalu di dasar layar */}
      <body className="flex min-h-screen flex-col bg-white text-slate-800 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
