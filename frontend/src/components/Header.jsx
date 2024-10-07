import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-200 p-4">
      <nav className="flex justify-between items-center">
        <Link href="/">This is the logo</Link>
        <div className="flex space-x-4">
          <p>Portfolio</p>
          <p>Blog</p>
          <p>Reach me</p>
        </div>
      </nav>
    </header>
  );
};
export default Header;
