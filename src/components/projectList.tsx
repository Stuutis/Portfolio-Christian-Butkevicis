import { Language } from "./language";
import { Project } from "./project";

interface ProjectListInterface {
  languages: string[];
  projectName: string;
  projectDescription: string;
  linkDirection: string;
  image: string;
  imageDescription: string;
}

export function ProjectList({
  languages,
  projectDescription,
  projectName,
  image,
  imageDescription,
  linkDirection,
}: ProjectListInterface) {
  return (
    <div className="mb-6">
      <Project
        hasLink
        linkDirection={linkDirection}
        hasImage
        image={image}
        imageDescription={imageDescription}
        projectName={projectName}
        projectDescription={projectDescription}
      />
      <div className="flex gap-3">
        {languages.map((language, index) => (
          <Language key={index} language={language} />
        ))}
      </div>
    </div>
  );
}
