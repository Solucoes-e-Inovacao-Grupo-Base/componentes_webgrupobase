import { useEffect } from "react";
import { updatePageMetadata } from "@/lib/seo";

const About = () => {
  useEffect(() => {
    updatePageMetadata({
      title: "Sobre",
      description: "História e propósito do Grupo Base na criação de experiências digitais consistentes."
    });
  }, []);

  return (
    <section className="mx-auto max-w-4xl space-y-10 px-4 py-16 md:px-6">
      <header className="space-y-4 text-center md:text-left">
        <h1 className="text-3xl font-bold text-white">Sobre o projeto</h1>
        <p className="text-base text-slate-300">
          Criamos este portal para concentrar componentes, diretrizes e serviços digitais que fortalecem a identidade do
          Grupo Base, garantindo consistência e velocidade em novas entregas.
        </p>
      </header>
      <div className="grid gap-10 md:grid-cols-2">
        <article className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Missão</h2>
          <p className="text-sm text-slate-300">
            Democratizar o acesso a uma base sólida de experiência do usuário, reduzindo retrabalho e aumentando a
            qualidade de cada projeto implementado pelo Grupo Base.
          </p>
        </article>
        <article className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Valores</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Acessibilidade para todas as pessoas em qualquer dispositivo.</li>
            <li>• Transparência nos processos e na documentação.</li>
            <li>• Performance e SEO como pilares desde o primeiro deploy.</li>
          </ul>
        </article>
      </div>
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
        <h3 className="text-lg font-semibold text-white">O que vem a seguir</h3>
        <p className="mt-2">
          Em 2025 planejamos expandir a biblioteca com componentes para aplicativos móveis, integrações com design tokens e
          pacotes de automação para design ops.
        </p>
      </section>
    </section>
  );
};

export default About;
