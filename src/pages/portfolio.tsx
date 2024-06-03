import { About } from "../components/about";
import { Navigation } from "../components/navigation";
import { ProjectList } from "../components/projectList";
import wenerskin from "../assets/pictures/wenerskin.png";
import fotonaSante from "../assets/pictures/fotonaSante.png";
import zeropreenchedor from "../assets/pictures/zeropreenchedorcuro.png";

export function PortfolioChris() {
  return (
    <div className="bg-slate-900">
      <div
        className="px-4 py-4  text-slate-200 
    sm:px-8  lg:flex lg:justify-center lg:m-auto lg:px-12 lg:gap-10 xl:px-24 2xl:w-5/6 2xl:max-w-screen-2xl"
      >
        <Navigation />
        <div>
          <About />

          <section id="projects" className="">
            <h1 className="text-slate-200 pt-2 pb-4 mt-10 mb-4 text-3xl  sticky top-0 bg-slate-900 z-10 ">
              Projetos
            </h1>
            <ProjectList
              projectName="Zeropreenchedor Curso"
              projectDescription="Landing Page desenvolvida para o curso do Zeropreenchedor, voltado para medicos da area de estetica facial."
              image={zeropreenchedor}
              imageDescription="Print do site do Zeropreenchedorcurso"
              linkDirection="https://zeropreenchedorcurso.com"
              languages={["React", "TailwindCSS"]}
            />
            <ProjectList
              image={wenerskin}
              linkDirection="https://zeropreenchedorcurso.com/wenerskin"
              projectName="Landing Page curso método WenerSkin"
              projectDescription="Landing Page sobre o curso do método WenerSkin, curso para médicos da area de estetica facial."
              languages={["React", "TailwindCSS"]}
              imageDescription="Print do site zeropreenchedor na pagina WenerSkin."
            />
            <ProjectList
              imageDescription="Print do site fotonasante"
              linkDirection="https://fotonasante.com.br/"
              projectName="Site FotonaSante"
              projectDescription="Site FotonaSante é um site com informações sobre a marca FotonaSante, foi criado varias paginas para explicar cada um dos procedimentos realizados pela empresa. "
              image={fotonaSante}
              languages={["HTML", "CSS", "HTML"]}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
