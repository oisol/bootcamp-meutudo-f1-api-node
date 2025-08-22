# API Fórmula 1 - Node.js + Fastify
---
## Conteúdo
- [Resumo](#resumo)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Como usar](#como)

### Resumo 📃
Projeto de API de Fórmula 1 criado durante o [Bootcamp Meutudo - Mobile Developer + Dio](https://web.dio.me/track/meutudo-mobile-developer). A proposta é oferecer uma API simples, de rápida implementação e com poucas camadas de abstração, ideal para projetos menores ou para estudos.

###  Tecnologias Utilizadas 🛠
- Node.js
- Fastify
- Typescript

### Instalação 📦
No seu terminal favorito vá até a pasta desejada e rode:
```bash
git clone https://github.com/oisol/bootcamp-meutudo-f1-api-node
cd bootcamp-meutudo-f1-api-node
npm i
```

### Como usar 🕹️
Dentro da pasta do projeto, para iniciar o server local:
```bash
npm run start:dev
``` 
A API irá rodar em:
```
htpt://localhost:8000
```
| Endpoints | GET |
| ------ | ---------|
| /teams | Retorna todos os times cadastrados |
| /drivers | Retorna todos os motoristas cadastrados |
| /drivers/:id | Retorna um motorista com o ID inserido |