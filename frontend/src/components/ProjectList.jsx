const { default: ProjectCard } = require("./ProjectCard");

const ProjectList = () => {
  const projects = [
    {
      title: "Plus30",
      description: "League of legends lobby manager",
    },
    {
      title: "Portfolio/Blog",
      description: "My portfolio and blog about programming",
    },
    {
      title: "Ecommerce App",
      description: "Dummy ecommerce application",
    },
    {
      title: "Devops snippetts",
      description: "-",
    },
    {
      title: "Microservice App",
      description: "-",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-y-20">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
export default ProjectList;
