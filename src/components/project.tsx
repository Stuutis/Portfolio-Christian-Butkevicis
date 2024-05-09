import { ArrowLink } from "../assets/svg/svgs";

export interface ProjectProps {
  projectName: string;
  projectDescription: string;
  hasLink?: boolean;
  linkDirection?: string;
  hasImage?: boolean;
  image?: string;
  imageDescription?: string;
}
export function Project({
  projectDescription,
  projectName,
  hasLink,
  linkDirection,
  image,
  imageDescription,
  hasImage,
}: ProjectProps) {
  return (
    <div className="sm:flex sm:flex-row-reverse sm:items-center sm:gap-4 sm:justify-between ">
      <div>
        <div className="flex items-center mb-2 text-lg">
          <a
            className="text-slate-200 hover:text-slate-50 cursor-pointer hover:underline lg:text-2xl"
            target="_blank"
            href={linkDirection}
          >
            {projectName}
          </a>
          {hasLink ? <ArrowLink link={linkDirection} /> : ""}
        </div>
        <p className="text-slate-400 mb-2">{projectDescription}</p>
      </div>
      {hasImage ? (
        <img
          className="rounded-xl my-5 sm:h-52 sm:w-full sm:max-w-60 lg:h-1/2"
          src={image}
          alt={imageDescription}
        />
      ) : (
        ""
      )}
    </div>
  );
}
