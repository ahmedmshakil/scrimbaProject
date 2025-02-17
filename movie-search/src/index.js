import React from 'react';
import { createRoot } from 'react-dom/client';
import SearchMovies from "./searchMovies";
import './index.css';


class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Custom Movie Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}

// ReactDOM.render(<Main />, document.getElementById('root'));
const root = createRoot(document.getElementById('root'));
root.render(<Main />);


//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit