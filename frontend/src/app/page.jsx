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
        <ProjectList />
      </section>
    </div>
  );
};

export default Home;
