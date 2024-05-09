import {
  GitHubIcon,
  LinkedinIcon,
  YoutubeIcon,
  TwitterIcon,
} from "../assets/svg/svgs";

export function Navigation() {
  return (
    <nav className="sm:mt-4 md:mt-8  ">
      <div className="flex flex-col gap-4 lg:sticky lg:top-20 lg:gap-96 lg:w-96">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold sm:text-5xl">
            Christian Butkevicis
          </h1>
          <p className="text-xl font-bold">Desenvolvedor Frontend Junior</p>
          <p className="text-slate-400 sm:max-w-96">
            Eu dou vida as suas ideias, construindo e engajando uma experiencia
            digital incrivel e acessivel.
          </p>
          <div className="hidden lg:flex lg:flex-col lg:gap-4 ">
            <a
              className="text-slate-400 hover:text-slate-200 text-xl"
              href="#about"
            >
              Sobre
            </a>
            <a
              className="text-slate-400 hover:text-slate-200 text-xl "
              href="#projects"
            >
              Projetos
            </a>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <GitHubIcon />
          <LinkedinIcon />
          <YoutubeIcon />
          <TwitterIcon />
        </div>
      </div>
    </nav>
  );
}
