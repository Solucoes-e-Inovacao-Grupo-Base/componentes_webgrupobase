import { useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageMetadata } from "@/lib/seo";

const Docs = () => {
  useEffect(() => {
    updatePageMetadata({
      title: "Documentação",
      description: "Guias e referências para integrar os componentes e APIs do Grupo Base."
    });
  }, []);

  return (
    <section className="mx-auto max-w-5xl space-y-10 px-4 py-16 md:px-6">
      <header className="space-y-4 text-center md:text-left">
        <h1 className="text-3xl font-bold text-white">Documentação</h1>
        <p className="text-base text-slate-300">
          Explore guias de implementação, exemplos práticos e padrões de design usados nas soluções do Grupo Base.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Primeiros passos</h2>
          <p className="mt-3 text-sm text-slate-300">
            Configure autenticação, obtenha tokens e conecte-se às APIs em minutos com os tutoriais rápidos.
          </p>
          <Link to="/services" className="mt-4 inline-flex items-center text-sm font-semibold text-primary-300 hover:text-primary-200">
            Ver serviços
          </Link>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Padrões de interface</h2>
          <p className="mt-3 text-sm text-slate-300">
            Consulte tokens, espaçamentos e componentes de UI aprovados para garantir consistência visual.
          </p>
          <a
            href="https://design.groupbasebytecn.com.br"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center text-sm font-semibold text-primary-300 hover:text-primary-200"
          >
            Abrir design system
          </a>
        </article>
      </div>
    </section>
  );
};

export default Docs;
