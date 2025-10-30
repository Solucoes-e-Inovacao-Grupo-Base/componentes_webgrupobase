import { FormEvent, useEffect, useState } from "react";
import { updatePageMetadata } from "@/lib/seo";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

const Contact = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageMetadata({
      title: "Contato",
      description: "Entre em contato com o time Grupo Base para iniciar um projeto digital."
    });
  }, []);

  const validate = (state: FormState) => {
    const newErrors: Partial<FormState> = {};

    if (!state.name.trim()) {
      newErrors.name = "Informe seu nome";
    }

    if (!state.email.trim()) {
      newErrors.email = "Informe um e-mail válido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!state.message.trim()) {
      newErrors.message = "Descreva como podemos ajudar";
    }

    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate(formState);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setFormState(initialState);
      setErrors({});
    } else {
      setSubmitted(false);
    }
  };

  return (
    <section className="mx-auto max-w-3xl space-y-8 px-4 py-16 md:px-6">
      <header className="space-y-4 text-center md:text-left">
        <h1 className="text-3xl font-bold text-white">Vamos conversar</h1>
        <p className="text-base text-slate-300">
          Compartilhe detalhes do projeto e retornaremos com um plano personalizado em até 2 dias úteis.
        </p>
      </header>
      <form
        className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl"
        onSubmit={handleSubmit}
        noValidate
        aria-describedby={submitted ? "form-sucesso" : undefined}
      >
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-white">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formState.name}
            onChange={(event) => setFormState((state) => ({ ...state, name: event.target.value }))}
            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "erro-nome" : undefined}
          />
          {errors.name && (
            <p id="erro-nome" className="mt-1 text-xs text-red-300">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-white">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={(event) => setFormState((state) => ({ ...state, email: event.target.value }))}
            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "erro-email" : undefined}
          />
          {errors.email && (
            <p id="erro-email" className="mt-1 text-xs text-red-300">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-white">
            Como podemos ajudar?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formState.message}
            onChange={(event) => setFormState((state) => ({ ...state, message: event.target.value }))}
            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "erro-mensagem" : undefined}
          />
          {errors.message && (
            <p id="erro-mensagem" className="mt-1 text-xs text-red-300">
              {errors.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-400"
        >
          Enviar mensagem
        </button>
        {submitted && (
          <p id="form-sucesso" className="rounded-md bg-emerald-500/20 px-4 py-3 text-sm text-emerald-200">
            Mensagem enviada! Nossa equipe retornará em breve.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
