const ProjectCard = ({ image, title, description, techList, link }) => {
  return (
    <div className="max-w-sm">
      <p>{image}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{techList}</p>
      <p>{link}</p>
    </div>
  );
};

export default ProjectCard;
