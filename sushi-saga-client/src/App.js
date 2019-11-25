import React from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import AddFunds from './components/AddFunds'

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      sushi: [],
      eatenSushi: [],
      plates: [],
      sushiListStart: 0,
      sushiListEnd: 4,
      money: 100
    }
  }

  componentDidMount = () => {
      fetch(API)
      .then(response => response.json())
      .then(sushiArray => this.setState({sushi: sushiArray}))
  }

  addFunds = (event) => {
    // console.log(event.currentTarget.previousElementSibling.value)

    let funds = parseInt(event.currentTarget.previousElementSibling.value);

    this.setState({
      money: this.state.money += funds
    })
  }

  eatsushi = (event, props) => {
    if(this.state.money <= 0){
      
      alert("You do not have enough money left. Thanks for coming in!")

    }else if(this.state.money < props.sushiPrice){

      alert("You don't have enough money to purchase that. Please select another option.")

    }else{

      if(event.currentTarget.firstChild){

        // event.currentTarget.firstChild.remove();
        // console.log(event.currentTarget.nextElementSibling.lastChild)
    
        let plates = this.state.plates;
        let eaten = this.state.eatenSushi;
    
        this.setState({
          eatenSushi: [...eaten, props.id],
          money: this.state.money -= props.sushiPrice,
          plates: [...plates,1]
        })

        console.log(this.state.eatenSushi)
  
      }else{
        alert("That sushi has already been eaten.")
      }

    }
  }

  nextSushis = () => {
    if(this.state.sushiListStart >= 42){

      this.setState({
        sushiListStart: 0,
        sushiListEnd: 4
      })

    }else{

      this.setState({
        sushiListStart: this.state.sushiListStart += 4,
        sushiListEnd: this.state.sushiListStart += 4
      })

    }
  }

  render() {
    return (
      <div className="app">
        
        <AddFunds addFunds={this.addFunds}/>

        <SushiContainer 

          eatenSushi={this.state.eatenSushi}
          sushiList={this.state.sushi} 
          sushiListStart={this.state.sushiListStart} 
          sushiListEnd={this.state.sushiListEnd} 
          nextSushis={this.nextSushis}
          eatSushi={this.eatsushi}
        />

        <Table plates={this.state.plates} money={this.state.money}/>
      </div>
    );
  }
}

export default App;