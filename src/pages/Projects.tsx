import { useState } from "react";
import Header from "../componets/Header";
import runflow from "../assets/RunFlow.png";
import ignitefeed from "../assets/IgniteFeed.png";
import reactdo from "../assets/ReactDo.png";

const images = [
  {
    src: runflow,
    url: "https://gym-flow-delta.vercel.app/login",
    name: "RunFlow",
    description: "Aplicativo para gerenciamento de corridas",
  },
  {
    src: ignitefeed,
    url: "https://ignite-feed-three-delta.vercel.app/",
    name: "Ignite Feed",
    description: "Prótotipo de uma rede social",
  },
  {
    src: reactdo,
    url: "https://react-do-psi.vercel.app/",
    name: "ReactDo",
    description: "Todo List",
  },
];

export function Projects() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="bg-[var(--gray-300)] w-screen flex-1 flex flex-col justify-center items-center gap-20 text-left">
        <h1 className="text-white text-3xl">Trabalhos e projetos</h1>
        <div className="relative w-full max-w-6xl h-180">
          <img
            src={images[current].src}
            alt={images[current].name}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 cursor-pointer"
            onClick={() => window.open(images[current].url, "_blank")}
          />

          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            <h2 className="font-bold">{images[current].name}</h2>
            <p className="text-sm">{images[current].description}</p>
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-500 text-white px-3 py-1 rounded-full"
          >
            {"<"}
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 text-white px-3 py-1 rounded-full"
          >
            {">"}
          </button>
        </div>
      </section>
    </main>
  );
}
