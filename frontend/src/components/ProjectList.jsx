const { default: ProjectCard } = require("./ProjectCard");

const ProjectList = () => {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid grid-cols-3 gap-y-20">
      {projects.map((_, index) => (
        <ProjectCard key={index} />
      ))}
    </div>
  );
};
export default ProjectList;
