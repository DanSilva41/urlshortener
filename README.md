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
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<br>

<p align="center">
  <img alt="URL Shortener" src="docs/url-shortener.png" width="80%">
</p>

## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Javascript](https://www.javascript.com/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)

## 💻 Project

This project is a REST API developed, with [Node.js](https://nodejs.org/en/) and [Javascript](https://www.javascript.com/). The intention was to create a service that initially receives as a parameter a URL that should be shortened.

The returned url must be saved in the database and have a counter for the number of times it is used, it must redirect to the url saved in the database. In this project I used the [SQLite](https://www.sqlite.org/index.html) as a database.

## 🤔 How to contribute

- Add a :star: star in this project :smile:;
- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

Once your pull request has been merged, you can delete your branch.

## :arrow_forward: How to run

- On your terminal, run the command to install the project's dependencies: `npm i`;
- Create a copy of the file **.env.example** with the name **.env** (at the root) and set your environment variables;
- Run the command to start the server (in development mode): `npm run dev`;

If all goes well, the application will be available at: **http://localhost:3000**.

## :memo: License

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.

---

Made with ♥ by [Danilo Silva](https://github.com/DanSilva41). Add me to [LinkedIn](https://www.linkedin.com/in/danilosilvap/) :wave: