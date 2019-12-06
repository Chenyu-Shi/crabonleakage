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
    Player: {gdp: 10,
            carbon: 10,
            policy: "No policy yeet"}
  }; 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){

    if(this.state.Stage == "Init"){
      this.setState({InitialWord: "Submit your policy based on your target emission", Stage:"Intro"});
      changeText("This is your country's state right now: your gdp is " + this.state.Player.gdp + " trillion dollars. Your carbon emission is " + this.state.Player.carbon + ", your carbon policy is " + this.state.Player.policy );
    }
    else{
      if (this.state.Stage == "Intro"){
      }
    }
  }
  render(){
    return <button id="start" style={{width:"200px",height:"50px",boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",fontSize: "20px"}} onClick = {this.handleClick}> {this.state.InitialWord} </button>
  }

}


function changeText(word){
    this.setState({InitialWord:word, Started: true });
  }

class TextBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    InitialWord : "You are about to start this game. The premise of this game is to blah blah",
    Started: false
  };
    changeText = changeText.bind(this);
  }


  render(){
    if (this.state.Started){
      return <div >
      <p> {this.state.InitialWord} </p>
      <table>
      <tr>
        <th> Country</th>
        <th>GDP</th>
    <th>Score</th>
    <th>CurrentPolicy</th>
    <th>Meeting International Agreement</th>
      </tr>
      <Country name ="A"/>
      <Country name ="B"/>
      <Country name = "C"/>
      <Country name = "D"/>
      <Country name ="E"/>

      </table>
      <select name="Policy">
      <option value="Tax">Volvo</option>
      <option value="Enbargo">Saab</option>
      <option value="No restriction">Fiat</option>
      </select>
      </div>
    }
    else{
    return <div style={{width:"800px"}}><p> {this.state.InitialWord} </p></div>
  }
  }
}

class Policy extends React.Component {
  render(){
    return <div></div>
  }
}

function roundUpdate() {
  return 
}
function acceptAgreement() {
  return 
}

class Country extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      GDP : 10,
      Emissions : 10,
      Score : 0,
      CurrentPolicy : "None",
      DefaultPolicy : "None",
      MeetingInternationalAgreement : "Yes"
    }
  }
  render(){
    return <tr>
    <th>{this.props.name}</th>
    <th>{this.state.GDP}</th>
    <th>{this.state.Score}</th>
    <th>{this.state.CurrentPolicy}</th>
    <th>{this.state.MeetingInternationalAgreement}</th>
    </tr>
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