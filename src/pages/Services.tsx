import { useEffect } from "react";
import Card from "@/components/Card";
import services from "@/data/services.json";
import { updatePageMetadata } from "@/lib/seo";

const Services = () => {
  useEffect(() => {
    updatePageMetadata({
      title: "Serviços",
      description: "Soluções completas do Grupo Base para design system, performance e operações digitais."
    });
  }, []);

  return (
    <section className="mx-auto max-w-6xl space-y-12 px-4 py-16 md:px-6">
      <header className="space-y-4 text-center md:text-left">
        <h1 className="text-3xl font-bold text-white">Serviços do Grupo Base</h1>
        <p className="text-base text-slate-300">
          Oferecemos squads multidisciplinares com foco em resultados medidos e sustentáveis.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            action={
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-300 hover:text-primary-200"
                onClick={() => {
                  const detail = document.getElementById(`service-${service.id}`);
                  detail?.scrollIntoView({ behavior: "smooth" });
                  detail?.focus({ preventScroll: true });
                }}
              >
                Explorar detalhes
                <span aria-hidden="true">↓</span>
              </button>
            }
          />
        ))}
      </div>
      <div className="space-y-8">
        {services.map((service) => (
          <article
            key={service.id}
            id={`service-${service.id}`}
            tabIndex={-1}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{service.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>• Kick-off colaborativo com stakeholders.</li>
              <li>• Roadmap quinzenal com entregáveis claros.</li>
              <li>• Relatórios de métricas e recomendações práticas.</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
