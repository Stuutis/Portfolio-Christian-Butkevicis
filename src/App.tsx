import { About } from "./components/about";
import { Project } from "./components/project";
import { Language } from "./components/language";
import wenerskin from "./assets/pictures/wenerskin.png";
import fotonaSante from "./assets/pictures/fotonaSante.png";
import zeropreenchedor from "./assets/pictures/zeropreenchedorcuro.png";
import { Navigation } from "./components/navigation";

export function App() {
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
            <div className="mb-6">
              <Project
                hasLink
                linkDirection="https://zeropreenchedorcurso.com/"
                hasImage
                image={zeropreenchedor}
                projectName="Landing Page Zeropreenchedor Curso"
                projectDescription="Foi realizado a criação de uma Landing Page para a venda de um curso
          para médicos da area de estetica facial."
              />
              <div className="flex gap-3">
                <Language language="React" />
                <Language language="TailWindCSS" />
              </div>
            </div>
            <div className="mb-6">
              <Project
                hasImage
                image={wenerskin}
                hasLink
                linkDirection="https://zeropreenchedorcurso.com/wenerskin"
                projectName="Landing Page curso método WenerSkin"
                projectDescription="Landing Page sobre o curso do método WenerSkin, curso para médicos da area de estetica facial."
              />
              <div className="flex gap-3">
                <Language language="React" />
                <Language language="TailWindCSS" />
              </div>
            </div>

            <div className="mb-6">
              <Project
                hasLink
                linkDirection="https://fotonasante.com.br/"
                hasImage
                projectName="Site FotonaSante"
                projectDescription="Site FotonaSante é um site com informações sobre a marca FotonaSante, foi criado varias paginas para explicar cada um dos procedimentos realizados pela empresa. "
                image={fotonaSante}
              />
              <div className="flex gap-3">
                <Language language="HTML" />
                <Language language="CSS" />
                <Language language="JavaScript" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
