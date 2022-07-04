import React from 'react';
import './App.css';
import logo from './logo.jpg'

class App extends React.Component {

  url = "https://www.bridgelabz.com/"
  constructor(){
    super();
    this.state = {
      title:"Hello from Bridgelabz"
    }
  }

  //On Click Function
 onClick = ($event) => {
  console.log("Save button is clicked",$event);
  window.open(this.url,"_blank");
 }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick = {this.onClick} 
         alt="The Bridgelabz Logo" />
      </div>
    )
  }

}


export default App;
