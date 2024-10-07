import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-300">
      <div className="flex justify-between items-center">
        <p>2024 Serhat Başesgioğlu. All right reserved.</p>
        <div className="flex space-x-4">
          <Link href="/about">About</Link>
          <p>Twitter</p>
          <p>Github</p>
          <p>Linkedin</p>
          <p>Discord</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
