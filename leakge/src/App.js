import React from 'react';
import logo from './logo.svg';
import './App.css';

class Game extends React.Component{
  render(){
    return (
      <div>
      <audio loop autoplay = "autoplay" >
        <source src="http://soundbible.com/mp3/Orca-SoundBible.com-841491912.mp3" type = 'audio/mp3' >
        </source>
      </audio>
      <Country />
      <AdviceColumn />
      <StatusBoard />
      </div>
      );
  }
}

class Country extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      GDP: 100, 
      Emissions: 100, 
      HealthBar: 100,
      CarbonPolicy: "None",
      defaultPolicy: "None",
      MeetingInternationalPolicy = true 
    }
  }

  render(){
    return (
      <div>
      <p> This is a country </p>
      <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-mPmUyeQfCJk%2FUB3wkAaJpJI%2FAAAAAAAAASU%2FRJk-oqNkKDE%2Fs1600%2Fmap-of-world.jpg&f=1&nofb=1" className = "image" alt="photo" width ="400" height = "300"/>
      </div>
      );
  }
}

class StatusBoard extends React.Component{
  render(){
    return (
      <div>
      <p> This is the statusboard  </p>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.panic.com%2Fblog%2Fwp-content%2Fuploads%2F2013%2F04%2Fsb-panic-3.jpg&f=1&nofb=1" className = "image" alt="photo" width ="400" height = "300"/>
      </div>
      );
  }
}

class AdviceColumn extends React.Component{
  render(){
    return (
      <div>
      <p> This is the AdviceColumn </p>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.images.express.co.uk%2Fimg%2Fdynamic%2F71%2F590x%2Fsecondary%2FBMW-PGA-Championship-latest-leaderboard-Wentworth-948805.jpg&f=1&nofb=1" className = "image" alt="photo" width ="400" height = "300"/>
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
          Edit <code>src/App.js</code> and save to reload Hello world.
        </p>
        <Game
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
