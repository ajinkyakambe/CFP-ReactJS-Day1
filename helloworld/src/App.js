import React from 'react';
import './App.css';
import logo from './logo.jpg'

class App extends React.Component {

  url = "https://www.bridgelabz.com/"
  constructor(){
    super();
    this.state = {
     userName: ""
    }
  }

  //On Click Function
 onClick = ($event) => {
  console.log("Save button is clicked",$event);
  window.open(this.url,"_blank");
 }

 //onNameChange
 onNameChange = (event) => {
  console.log("Value is ",event.target.value);
  this.setState({userName:event.target.value})
 }

  render() {
    return (
      <>
      <div>
        <h1>Hello {this.state.userName} from Bridgelabz.</h1>
        <img src={logo} onClick = {this.onClick} 
         alt="The Bridgelabz Logo" />
      </div>
      <div>
        <input onChange={this.onNameChange}/>
      </div>
      </>
    )
  }

}


export default App;
