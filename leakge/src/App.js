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
      <TextBar id="text"/>
      <Button />
      </div>
      );
  }
};


class Button extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
    InitialWord : "Got it! Let's start the game.",
    Stage: "Init",
    Player: {gdp: "10",
            carbon: "10",
            policy: "No policy yeet"}
  }; 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){

    if(this.state.Stage == "Init"){
      this.setState({InitialWord: "The game has begun", Stage:"Intro"});

      changeText("This is your country's state right now: your gdp is " + this.state.Player.gdp + " trillion dollars. Your carbon emission is " + this.state.Player.carbon + ", your carbon policy is " + this.state.Player.policy );
    
    }
    else{
      if (this.state.Stage == "Intro"){
      }
    }
  }
  render(){
    return <button id="start" onClick = {this.handleClick}> {this.state.InitialWord} </button>
  }

}


function changeText(word){
    this.setState({InitialWord:word});
  }

class TextBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    InitialWord : "You are about to start this game. The premise of this game is to blah blah"
  };
    changeText = changeText.bind(this);
  }


  render(){
    return <div style={{width:"800px"}}><p> {this.state.InitialWord} </p></div>
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
      </header>
    </div>
  );
}

export default App;
