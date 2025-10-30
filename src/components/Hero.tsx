import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="max-w-xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-300">Grupo Base</p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Componentes prontos para acelerar produtos digitais
          </h1>
          <p className="text-lg text-slate-300">
            Uma coleção de UI acessível com React, TypeScript e Tailwind, preparada para projetos de alta performance.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#servicos"
              className="rounded-md bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-400"
            >
              Ver serviços
            </a>
            <Link
              to="/contact"
              className="rounded-md border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-primary-400 hover:text-primary-200"
            >
              Fale com a equipe
            </Link>
          </div>
        </div>
        <picture className="relative mt-10 w-full max-w-md md:mt-0">
          <source srcSet="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=640&q=80" media="(min-width: 768px)" />
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=480&q=80"
            alt="Equipe colaborando em um projeto digital"
            loading="lazy"
            className="h-full w-full rounded-2xl border border-slate-800 object-cover shadow-2xl"
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
