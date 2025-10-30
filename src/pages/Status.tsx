import { useEffect } from "react";
import { updatePageMetadata } from "@/lib/seo";

const Status = () => {
  useEffect(() => {
    updatePageMetadata({
      title: "Status",
      description: "Disponibilidade e estado operacional dos serviços Grupo Base."
    });
  }, []);

  const env = (window as any).__ENV__;

  return (
    <section className="mx-auto max-w-4xl space-y-6 px-4 py-16 md:px-6">
      <header className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-bold text-white">Status da plataforma</h1>
        <p className="text-base text-slate-300">
          Acompanhamento do funcionamento das APIs e ambientes publicados.
        </p>
      </header>
      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-sm text-emerald-100">
        <p className="font-semibold uppercase tracking-wide text-emerald-300">Tudo operacional</p>
        <p className="mt-2">
          Nenhum incidente registrado nas últimas 24 horas. Ambiente ativo: <strong>{env?.name ?? "desconhecido"}</strong>.
        </p>
      </div>
    </section>
  );
};

export default Status;
