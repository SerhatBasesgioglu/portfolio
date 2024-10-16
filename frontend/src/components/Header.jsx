import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-200 p-4">
      <nav className="flex justify-between items-center">
        <Link href="/">This is the logo</Link>
        <div className="flex space-x-4">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
