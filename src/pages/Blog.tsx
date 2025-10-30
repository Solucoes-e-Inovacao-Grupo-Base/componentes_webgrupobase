import { useEffect } from "react";
import { updatePageMetadata } from "@/lib/seo";

const Blog = () => {
  useEffect(() => {
    updatePageMetadata({
      title: "Blog",
      description: "Insights, novidades e casos de sucesso com soluções do Grupo Base."
    });
  }, []);

  const posts = [
    {
      title: "Como padronizamos o design para acelerar entregas",
      excerpt: "Guia prático do squad de design ops com métricas de impacto.",
      href: "https://medium.com"
    },
    {
      title: "Monitoramento em tempo real com dashboards unificados",
      excerpt: "Veja como conectamos logs, métricas e alertas em uma única visão.",
      href: "https://medium.com"
    }
  ];

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-4 py-16 md:px-6">
      <header className="space-y-4 text-center md:text-left">
        <h1 className="text-3xl font-bold text-white">Blog Grupo Base</h1>
        <p className="text-base text-slate-300">
          Conteúdos selecionados sobre experiências digitais, performance e cultura de produto.
        </p>
      </header>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{post.excerpt}</p>
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center text-sm font-semibold text-primary-300 hover:text-primary-200"
            >
              Ler artigo
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
