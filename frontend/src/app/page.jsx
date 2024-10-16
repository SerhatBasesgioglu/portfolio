import ProjectList from "@/components/ProjectList";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-evenly items-center">
      <section className="mb-8">
        <h2 className="text-2xl font-bold">About me</h2>
        <p>
          Hi, my name is Serhat, I am a software engineer. I am more of a
          generalist rather than a specialist in a field.I like to work on hobby
          projects as much as professional endevours.
        </p>
      </section>

      <section className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Content</h2>
        <div className="flex space-x-10">
          <Link href="/projects">Projects</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Socials</h2>
        <div className="flex space-x-10">
          <Link
            href="https://github.com/SerhatBasesgioglu"
            target="_blank"
            className="flex flex-col items-center"
          >
            <Image
              src="/logos/github-white.svg"
              width="48"
              height="48"
              alt="Github Logo"
            />
            <p>Github</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/serhat-başesgioğlu/"
            target="_blank"
            className="flex flex-col items-center"
          >
            <Image
              src="/logos/linkedin.svg"
              width="48"
              height="48"
              alt="Linkedin Logo"
            />
            <p>Linkedin</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
