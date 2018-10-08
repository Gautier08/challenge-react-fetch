import React, { Component } from "react";
import GenerateQuote from "./GenerateQuote";
import DisplayQuote from "./DisplayQuote";
import "./App.css";

const sampleQuote = {
  character: "Otto",
  quote: "Oh, wow, windows. I don't think I could afford this place.",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FOttoMann.png?1497567511803",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
    };
  }
  getQuote() {
    console.log("ici")
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        console.log("data", data)
        this.setState({
          quote: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GenerateQuote selectQuote={() => this.getQuote()} />
          <DisplayQuote quote={this.state.quote} />
        </header>
      </div>
    );
  }
}

export default App;
