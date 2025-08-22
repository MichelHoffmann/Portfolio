import avatar from "../assets/avatar.png";
import typescript from "../assets/typescript.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import { ArrowDownToLine, MessageCircleMore } from "lucide-react";
import { NavLink } from "react-router-dom";
import Header from "../componets/Header";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Header />
      <main className="flex-1 bg-[var(--gray-300)] flex flex-col justify-center items-center gap-35 xl:flex-row xl:justify-around xl:gap-5">
        <section className="flex flex-col items-center justify-center gap-3 text-center">
          <img src={avatar} alt="Ilustração do Michel" className="mb-7" />
          <div className="text-white">
            <p className="mb-3">OLÁ 👋🏽 EU SOU O</p>
            <h1 className="text-4xl font-semibold mb-3">
              MICHEL <br />
              <span className="text-[var(--purple-medium)]">HOFFMANN</span>
            </h1>
            <h3 className="text-[var(--gray-200)] text-2xl font-light mb-3">
              Fullstack Developer
            </h3>
          </div>
          <div id="Techs" className="flex gap-7">
            <div className="bg-[var(--blue-gray)] border-[var(--purple-dark)] border-2 w-15 h-15 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <img
                src={typescript}
                title="Icone Typescript"
                alt="Icone Typescript"
                className="w-10 rounded-md"
              />
            </div>
            <div className="bg-[var(--blue-gray)] border-[var(--purple-dark)] border-2 w-15 h-15 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <img
                src={reactjs}
                title="Icone React JS"
                alt="Icone React JS"
                className="w-10 rounded-md"
              />
            </div>
            <div className="bg-[var(--blue-gray)] border-[var(--purple-dark)] border-2 w-15 h-15 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <img
                src={nodejs}
                title="Icone Node JS"
                alt="Icone Node JS"
                className="w-10 rounded-md"
              />
            </div>
            <div className="bg-[var(--blue-gray)] border-[var(--purple-dark)] border-2 w-15 h-15 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <img
                src={mongodb}
                title="Icone Mongo DB"
                alt="Icone Mongo DB"
                className="h-10 rounded-md"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center gap-15">
            <button className="flex items-center justify-center gap-3 text-[var(--purple-medium)] text-xl transition-transform duration-300 hover:scale-110">
              <ArrowDownToLine size={20} /> Baixar CV
            </button>
            <button className="flex items-center justify-center gap-3 text-[var(--purple-medium)] text-xl border-2 rounded-md p-3 transition-transform duration-300 hover:scale-110">
              <MessageCircleMore size={20} />
              Vamos conversar
            </button>
          </div>
          <p className="text-white text-justify px-15 max-w-200">
            Sou um desenvolvedor Front-End apaixonado por tecnologia. Iniciei
            minha jornada na programação web em 2022 estudando através da Udemy,
            Youtube e a comunidade Dev. Atualmente desenvolvo meus projetos
            utilizando Typescript, React, Next, Styled Components e Tailwind e
            estou iniciando os meus estudos voltados para o back-end seguindo a
            mesma stack usando node JS.
          </p>
          <NavLink
            to="/projects"
            className="flex justify-center items-center bg-[var(--purple-dark)] text-white w-45 h-12 rounded-full border-1 border-[var(--purple-dark)] hover:bg-[var(--gray-300)] shadow-[0_0_39px_-5px_rgba(114,66,179,0.85)] 
    transition duration-150 hover:cursor-pointer mb-10"
          >
            Meus Projetos
          </NavLink>
        </section>
      </main>
      <footer className="w-screen h-7 bg-[var(--blue-gray)] flex justify-center items-center">
        <p className="text-gray-400 text-center">Developed by Michel</p>
      </footer>
    </div>
  );
}
