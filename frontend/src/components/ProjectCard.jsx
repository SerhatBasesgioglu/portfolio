const ProjectCard = ({ title, description }) => {
  return (
    <div className="bg-gray-100 max-w-sm">
      <p>Insert image here</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>Technologies Used</p>
      <p>Source code</p>
    </div>
  );
};

export default ProjectCard;
