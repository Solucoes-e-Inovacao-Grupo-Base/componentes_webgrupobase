export const siteMeta = {
  name: "Grupo Base Components",
  description:
    "Componentes de interface acessíveis, responsivos e otimizados para projetos digitais do Grupo Base.",
  url: "https://webgrupobase.github.io/componentes_webgrupobase"
};

export const buildTitle = (title?: string) =>
  title ? `${title} · ${siteMeta.name}` : siteMeta.name;

export const updatePageMetadata = ({
  title,
  description
}: {
  title?: string;
  description?: string;
}) => {
  if (typeof document === "undefined") return;

  const finalTitle = buildTitle(title);
  document.title = finalTitle;

  const ensureMeta = (name: string, attr: "name" | "property" = "name") => {
    const selector = `${attr}="${name}"`;
    let element = document.querySelector<HTMLMetaElement>(`meta[${selector}]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attr, name);
      document.head.appendChild(element);
    }
    return element;
  };

  const descriptionContent = description ?? siteMeta.description;
  ensureMeta("description").setAttribute("content", descriptionContent);
  ensureMeta("og:title", "property").setAttribute("content", finalTitle);
  ensureMeta("og:description", "property").setAttribute("content", descriptionContent);
  ensureMeta("og:url", "property").setAttribute("content", siteMeta.url);
};
