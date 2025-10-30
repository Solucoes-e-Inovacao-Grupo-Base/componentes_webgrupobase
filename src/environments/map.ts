export const envFromHost = (h: string) => {
  if (/^staging\./.test(h)) return "staging";
  if (/^app\./.test(h)) return "app";
  if (/^docs\./.test(h)) return "docs";
  if (/^blog\./.test(h)) return "blog";
  return "prod";
};

export const cfg = (env: string) => ({
  name: env,
  apiBase:
    env === "prod"
      ? "https://api.groupbasebytecn.com.br"
      : env === "staging"
        ? "https://api-staging.groupbasebytecn.com.br"
        : env === "app"
          ? "https://api.groupbasebytecn.com.br"
          : env === "docs"
            ? ""
            : env === "blog"
              ? ""
              : ""
});
