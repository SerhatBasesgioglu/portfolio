import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex justify-between items-center">
        <Link href="/">Serhat Başesgioğlu</Link>
        <div className="flex space-x-4">
          <Link href="/projects">Projects</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
