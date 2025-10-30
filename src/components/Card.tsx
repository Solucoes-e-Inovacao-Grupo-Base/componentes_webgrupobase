import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
}

const Card = ({ title, description, icon, action }: CardProps) => {
  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl focus-within:-translate-y-1 focus-within:shadow-xl">
      <div className="space-y-4">
        {icon && <div className="text-3xl text-primary-300" aria-hidden="true">{icon}</div>}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
      {action && <div className="mt-4">{action}</div>}
    </article>
  );
};

export default Card;
