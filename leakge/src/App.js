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
        //change policy 
        roundUpdate(this.state.policy);
      }
    }
  }
  render(){
    return <button id="start" style={{width:"200px",height:"50px",boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",fontSize: "20px"}} onClick = {this.handleClick}> {this.state.InitialWord} </button>
  }

}

function roundUpdate() {
  //changing states

  var listofcountries = this.state.States; 
  for (var i = 0; i < listofcountries.length; i++) {
    var country = listofcountries[i];
    country.GDP += 1;
    country.Emissions += 1;
    listofcountries[i] = country;
    //Do something
}
  this.setState({"States": listofcountries});
}

function changeText(word){
    this.setState({InitialWord:word, Started: true });
  }

class TextBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    InitialWord : "You are about to start this game. The premise of this game is to blah blah",
    Started: false,
    States: [{
      Name: "A",
      GDP : 10,
      Emissions : 10,
      Score : 0,
      CurrentPolicy : "None",
      DefaultPolicy : "None",
      MeetingInternationalAgreement : "Yes"
    },
    {
      Name: "B",
      GDP : 10,
      Emissions : 10,
      Score : 0,
      CurrentPolicy : "None",
      DefaultPolicy : "None",
      MeetingInternationalAgreement : "Yes"
    },
    {
      Name: "C",
      GDP : 10,
      Emissions : 10,
      Score : 0,
      CurrentPolicy : "None",
      DefaultPolicy : "None",
      MeetingInternationalAgreement : "Yes"
    },
    {
      Name: "D",
      GDP : 10,
      Emissions : 10,
      Score : 0,
      CurrentPolicy : "None",
      DefaultPolicy : "None",
      MeetingInternationalAgreement : "Yes"
    },
    {
      Name: "E",
      GDP : 10,
      Emissions : 10,
      Score : 0,
      CurrentPolicy : "None",
      DefaultPolicy : "None",
      MeetingInternationalAgreement : "Yes"
    }
    ]
  };
    changeText = changeText.bind(this);
    roundUpdate = roundUpdate.bind(this);
  }


  render(){
    if (this.state.Started){
      return <div >
      <p> {this.state.InitialWord} </p>
      <table>
      <tr>
        <th> Country</th>
        <th>GDP</th>
        <th>Emissions</th>
    <th>Score</th>
    <th>CurrentPolicy</th>
    <th>Meeting International Agreement</th>
      </tr>
      <Country name ={this.state.States[0].Name} GDP={this.state.States[0].GDP} Emissions = {this.state.States[0].Emissions} Score = {this.state.States[0].Score} CurrentPolicy = {this.state.States[0].CurrentPolicy} DefaultPolicy={this.state.States[0].DefaultPolicy} MeetingInternationalAgreement={this.state.States[0].MeetingInternationalAgreement}/>
      <Country name ={this.state.States[1].Name} GDP={this.state.States[1].GDP} Emissions = {this.state.States[1].Emissions} Score = {this.state.States[1].Score} CurrentPolicy = {this.state.States[1].CurrentPolicy} DefaultPolicy={this.state.States[1].DefaultPolicy} MeetingInternationalAgreement={this.state.States[1].MeetingInternationalAgreement}/>
      <Country name ={this.state.States[2].Name} GDP={this.state.States[2].GDP} Emissions = {this.state.States[2].Emissions} Score = {this.state.States[2].Score} CurrentPolicy = {this.state.States[2].CurrentPolicy} DefaultPolicy={this.state.States[2].DefaultPolicy} MeetingInternationalAgreement={this.state.States[2].MeetingInternationalAgreement}/>
      <Country name ={this.state.States[3].Name} GDP={this.state.States[3].GDP} Emissions = {this.state.States[3].Emissions} Score = {this.state.States[3].Score} CurrentPolicy = {this.state.States[3].CurrentPolicy} DefaultPolicy={this.state.States[3].DefaultPolicy} MeetingInternationalAgreement={this.state.States[3].MeetingInternationalAgreement}/>
      <Country name ={this.state.States[4].Name} GDP={this.state.States[4].GDP} Emissions = {this.state.States[4].Emissions} Score = {this.state.States[4].Score} CurrentPolicy = {this.state.States[4].CurrentPolicy} DefaultPolicy={this.state.States[4].DefaultPolicy} MeetingInternationalAgreement={this.state.States[4].MeetingInternationalAgreement}/>


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
    <th>{this.props.GDP}</th>
    <th>{this.props.Emissions}</th>
    <th>{this.props.Score}</th>
    <th>{this.props.CurrentPolicy}</th>
    <th>{this.props.MeetingInternationalAgreement}</th>
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