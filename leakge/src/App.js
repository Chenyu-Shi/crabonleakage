import React from 'react';
import logo from './logo.svg';
import './App.css';

class Country extends React.Component{
  render(){
    return (
      <div>
      <p> This is a country </p>
      <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-mPmUyeQfCJk%2FUB3wkAaJpJI%2FAAAAAAAAASU%2FRJk-oqNkKDE%2Fs1600%2Fmap-of-world.jpg&f=1&nofb=1" className = "image" alt="photo"/>
      </div>
      );
  }
}

function App() {
  // Step 1 create country instance

  // step 2 call country's 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload Hello world.fasdlsdafldsaf
        </p>
        <Country
          />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
