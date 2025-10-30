import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <a
        href="#conteudo-principal"
        className="absolute left-4 top-4 z-50 -translate-y-32 rounded bg-primary-500 px-4 py-2 text-sm font-semibold text-white focus-visible:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo-principal" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default App;
