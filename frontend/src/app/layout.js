import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
