const Header = () => {
  return (
    <header className="bg-gray-200 p-4">
      <nav className="flex justify-between items-center">
        <p>This is the logo</p>
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
