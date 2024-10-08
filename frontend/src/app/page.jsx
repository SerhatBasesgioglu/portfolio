import ProjectList from "@/components/ProjectList";

const Home = () => {
  return (
    <div className="">
      <section className="mb-8">
        <h2 className="text-2xl font-bold">About me</h2>
        <p>Hi, my name is Serhat, I am a software developer!</p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p>I made a couple of projects which can be seen below!</p>
        <div>
          <p>Plus30</p>
          <p>Portfolio</p>
          <p>MicroserviceTest</p>
          <p>Blog</p>
        </div>
      </section>
      <ProjectList />
    </div>
  );
};

export default Home;
