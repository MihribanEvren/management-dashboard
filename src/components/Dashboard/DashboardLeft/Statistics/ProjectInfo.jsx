function ProjectInfo({ title, description }) {
  return (
    <div className="flex flex-col items-start justify-center space-y-1">
      <h3 className="text-xs font-medium">{title}</h3>
      <p className="text-xs text-paragraphcolor">{description}</p>
    </div>
  );
}

export default ProjectInfo;
