import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[var(--gray-300)] h-25 flex items-center justify-between px-15">
      <NavLink to={"/"} className="text-[var(--purple-medium)] text-5xl">
        MH
      </NavLink>
      <nav className="flex gap-7">
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-[var(--purple-dark)] hover:text-[var(--purple-medium)] text-xl"
              : "text-white hover:text-[var(--purple-medium)] text-xl"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contactme"
          className={({ isActive }) =>
            isActive
              ? "text-[var(--purple-dark)] hover:text-[var(--purple-medium)] text-xl"
              : "text-white hover:text-[var(--purple-medium)] text-xl"
          }
        >
          Contact me
        </NavLink>
      </nav>
    </header>
  );
}
