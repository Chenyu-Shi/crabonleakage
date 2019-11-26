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
      <TextBar />
      <Button />
      </div>
      );
  }
};

class Button extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
    InitialWord : "Start the game."
  }; 
  }
  render(){
    return <button id="start"> {this.state.InitialWord} </button>
  }

}

class TextBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    InitialWord : "You just started this game."
  }; 
  }

  render(){
    return <p> {this.state.InitialWord} </p>
  }
}


function App() {
  // Step 1 create country instance

  // step 2 call country's 
  return (
    <div className="App">
      <header className="App-header">

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
