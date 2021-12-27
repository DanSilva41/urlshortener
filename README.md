<h1 align="center">
  :scissors::link: Smiggle | URL Shortener
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/DanSilva41/urlshortener.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/top/DanSilva41/urlshortener.svg">

  <a href="https://github.com/DanSilva41/urlshortener/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/DanSilva41/urlshortener.svg">
  </a>

  <a href="https://github.com/DanSilva41/urlshortener/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/DanSilva41/urlshortener.svg">
  </a>
  
  <img alt="Coverage" src="https://img.shields.io/badge/coverage-100%25-brightgreen">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  
  <a href="https://github.com/DanSilva41/">
    <img alt="Author" src="https://img.shields.io/badge/author-Danilo%20Silva-blue">
  </a>
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br>

<p align="center">
  <img alt="URL Shortener" src="docs/url-shortener.png" width="80%">
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Javascript](https://www.javascript.com/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)

## 💻 Projeto

Esse projeto é uma API REST desenvolvida, com [Node.js](https://nodejs.org/en/) e [Javascript](https://www.javascript.com/). O intuito foi criar um serviço que inicialmente recebe como parâmetro uma URL que deverá ser encurtada.

A url retornada deve ser salva no banco de dados e possuir um contador para o número de vezes que é utilizada, deve fazer o redirecionamento para a url salva no banco. Nesse projeto usei o [SQLite](https://www.sqlite.org/index.html) como banco de dados.

## 🤔 Como contribuir

- Adicione uma :star: estrela nesse projeto :smile:;
- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :arrow_forward: Como rodar

- No seu terminal, rode o comando para instalar as dependências do projeto: `npm i`;
- Crie uma cópia do arquivo **.env.example** com o nome **.env** (na raiz) e defina suas variáveis de ambiente;
- Rode o comando para iniciar o servidor (em modo desenvolvimento): `npm run dev`;

Se tudo ocorrer bem, a aplicação vai estar disponível em: **http://localhost:3000**.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by [Danilo Silva](https://github.com/DanSilva41). Me adicione no [LinkedIn](https://www.linkedin.com/in/danilosilvap/) :wave: