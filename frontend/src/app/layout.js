import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;