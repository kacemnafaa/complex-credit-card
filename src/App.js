
import './App.css';
import Title from './Title'
import Icone from './Iconepus'
import Cardnum from './cardnum'
import Visa from './visa'
import React, { Component } from 'react';;


class Ccard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nom:"floune",
      cardnum:"7253325678951245",
      thu:"11/50",

    }

    
  }
  Addname = (event) =>{  this.setState({ nom:event.target.value })}
  Addthu = (event) =>{  this.setState({ thu:event.target.value })} 
  Addnum = (event) =>{  this.setState({ cardnum:event.target.value })}         







  render() {
    return ( <div className="App">
    <Title card={"credit card"} />
    <Icone/>
    <Cardnum cardnum={this.state.cardnum} thu={this.state.thu} name={this.state.nom}/>
    <Visa/>
   <span> Name:</span> <input type="text"  onChange={this.Addname}/>
   <span> Thu:</span> <input type="text"  onChange={this.Addthu}/>
   <span> cardnum:</span> <input type="text"  onChange={this.Addnum}/>
  </div>)
  }
}


export default Ccard