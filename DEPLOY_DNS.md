## DNS para GitHub Pages (apex)
A records (@) -> 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
AAAA records (@) -> 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153
CNAME (www) -> <USUARIO>.github.io
Observações:
- Ative HTTPS “Enforce HTTPS” em Settings > Pages após propagação.
- Para subdomínios filhos:
  staging CNAME -> <USUARIO>.github.io
  app CNAME -> <USUARIO>.github.io
  docs CNAME -> <USUARIO>.github.io
  blog CNAME -> <USUARIO>.github.io
  Todos os subdomínios apontam para o mesmo Pages; o app diferencia comportamento pelo hostname.
Testes:
  dig groupbasebytecn.com.br +noall +answer -t A
  dig groupbasebytecn.com.br +noall +answer -t AAAA
Tempo de propagação: até 24h típico.
