const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} Grupo Base. Todos os direitos reservados.
        </p>
        <nav aria-label="Links institucionais" className="flex flex-wrap gap-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-200">
            LinkedIn
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-slate-200">
            Instagram
          </a>
          <a href="mailto:contato@grupobase.com" className="hover:text-slate-200">
            contato@grupobase.com
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
