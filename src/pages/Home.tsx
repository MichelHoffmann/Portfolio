import { AboutMe } from "../componets/AboutMe";
import { Header } from "../componets/Header";

export function Home() {
  return (
    <>
      <Header />
      <header className="flex justify-between px-9">
        <h1 className="text-[var(--purple-dark)]">MH</h1>
        <nav>
          <ul className="flex">
            <li>
              <a href="#" className="text-amber-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#">ContactMe</a>
            </li>
          </ul>
        </nav>
      </header>
      <AboutMe />
    </>
  );
}
