# React Movie Search App

A simple React application for searching movies using the TMDB API.
### Screenshots

<p align="center">
    <img alt="Screenshot" src="/image/img01.jpg" width="400">
    <img alt="Screenshot" src="/image/img02.jpg" width="400">
</p>

#### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually bundled with Node.js)

### Getting Started

Follow these steps to set up the project locally:

#### 1. Clone the Repository

```bash
git clone https://github.com/ahmedmshakil/scrimbaProject.git
cd movie-search

```
#### 2. Install Dependencies
- Install all required packages using npm:
```bash
npm install
```
-> This command reads the package.json file and creates a node_modules folder with all dependencies.

#### 3. Start the Development Server
- Run the app in development mode:

```bash
npm start
```
-> The app will automatically open in your browser at http://localhost:3000.

# Project Structure

```bash
movie-search/
├── public/
│   └── index.html
├── src/
│   ├── SearchMovies.js
│   ├── MovieCard.js 
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```
Key files:

- src/index.js: Entry point of the React app.
- src/SearchMovies.js: Component for searching and displaying movies.
- src/MovieCard.js: Component for rendering movie details.
- public/index.html: Main HTML template.

### Troubleshooting
- Installation Issues:
If npm install fails, delete the node_modules folder and package-lock.json, then reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Author

👤 **Shakil Ahmed**

* LinkedIn: [@ahmedmshakil](https://www.linkedin.com/in/ahmedmshakil/)
* GitHub: [@ahmedmshakil](https://github.com/ahmedmshakil)