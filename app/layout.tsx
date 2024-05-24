
import "./globals.css";


import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Movie Hub",
  description: "Discover movies",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
       <Footer />
      </body>
    </html>
  );
}