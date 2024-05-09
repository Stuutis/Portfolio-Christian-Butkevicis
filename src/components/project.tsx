import { ArrowLink } from "../assets/svg/svgs";

interface ProjectProps {
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
          <h3 className="text-slate-200  ">{projectName}</h3>
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
