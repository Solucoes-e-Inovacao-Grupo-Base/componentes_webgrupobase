import { Link } from "react-router-dom";
import { useEffect } from "react";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import services from "@/data/services.json";
import { updatePageMetadata } from "@/lib/seo";

const Home = () => {
  useEffect(() => {
    updatePageMetadata({
      title: "Início",
      description:
        "Conheça os componentes e serviços digitais do Grupo Base para acelerar entregas com alta qualidade."
    });
  }, []);

  const envName = (window as any).__ENV__?.name ?? "prod";

  return (
    <div className="space-y-20 pb-20">
      <div className="flex justify-center pt-4">
        <span className="rounded-full border border-primary-500/50 bg-primary-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-200">
          Ambiente: {envName}
        </span>
      </div>
      <Hero />
      <section id="servicos" className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white">Serviços em destaque</h2>
          <p className="text-base text-slate-300">
            Reutilize blocos de interface, fluxos e boas práticas para lançar produtos completos em poucas semanas.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              action={
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-300 hover:text-primary-200"
                >
                  Saiba mais
                  <span aria-hidden="true">→</span>
                </Link>
              }
            />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/60 px-6 py-16 text-center shadow-xl">
        <h3 className="text-2xl font-semibold text-white">Performance garantida</h3>
        <p className="mt-4 text-base text-slate-300">
          Implementamos monitoramento contínuo e boas práticas de acessibilidade para alcançar notas 90+ no Lighthouse em
          Performance, Acessibilidade e SEO.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-400"
        >
          Solicitar uma avaliação
        </Link>
      </section>
    </div>
  );
};

export default Home;
