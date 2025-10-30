import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const links = [
  { to: "/", label: "Início" },
  { to: "/about", label: "Sobre" },
  { to: "/services", label: "Serviços" },
  { to: "/contact", label: "Contato" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-500 text-base font-bold text-white">
            GB
          </span>
          <span className="hidden sm:inline">Grupo Base Components</span>
        </NavLink>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-slate-700 px-3 py-2 text-sm font-medium text-slate-100 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:hidden"
        >
          <span className="sr-only">Abrir menu de navegação</span>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
        <nav
          id="menu-principal"
          aria-label="Principal"
          className={clsx(
            "absolute inset-x-0 top-full z-40 flex flex-col gap-2 border-b border-slate-800 bg-slate-950 px-4 pb-4 pt-2 transition-all duration-200 md:static md:inset-auto md:top-auto md:flex md:flex-row md:items-center md:gap-4 md:border-0 md:bg-transparent md:px-0 md:py-0",
            isOpen ? "visible opacity-100" : "invisible opacity-0 md:visible md:opacity-100"
          )}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                clsx(
                  "rounded-md px-3 py-2 text-sm font-medium transition",
                  isActive ? "bg-primary-500 text-white" : "text-slate-200 hover:bg-slate-800"
                )
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
