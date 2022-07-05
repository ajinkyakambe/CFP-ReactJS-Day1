import React from 'react';
import './App.css';
import logo from './logo.jpg'

class App extends React.Component {

  url = "https://www.bridgelabz.com/"
  constructor(){
    super();
    this.state = {
     userName: "",
     nameError:""
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
  const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
  this.setState({userName:event.target.value})
  if (nameRegex.test(event.target.value)){
    this.setState({nameError:""})
  } else {
    this.setState({nameError:"Name is incorrect"})
  }

 }

  render() {
    return (
      <>
      <div className="inner_wrapper">
      <div>
        <h1>Hello {this.state.userName} from Bridgelabz</h1>
        <img src={logo} onClick = {this.onClick} 
         alt="The Bridgelabz Logo" />
      </div>
      <div>
        <input onChange={this.onNameChange}/>
        <span className = "error" > {this.state.nameError} </span>

      </div>
      <p>     
        BridgeLabz is an AWS recognised incubator and is solely focussed on solving tech employability.
        Over the last 4 years, it has worked with 500+ top tech companies and 3500+ engineers have
        been hired from Bridgelabz. It has labs in Mumbai and Bangalore. 
        It has partnered with over 500+ companies, including Yatra, Capgemini, Meru Cabs, LafargeHolcim, JDA,
        UrbanLadder, Fullerton India, and RBL bank. BridgeLabz won Business World Techtor Award
        2020 and secured 2nd position at Global Edtech Startup Awards 2019, India. Also, was 
        selected by the Maharashtra state government as Top 100 Startups 2019. BridgeLabz is also
        the employability partner for ETCS 5.0 ( Economic Times Campus Stars) program which is connected to over 5000+ engineering colleges in India.

      </p>
      </div>
      </>
    )
  }

}


export default App;
