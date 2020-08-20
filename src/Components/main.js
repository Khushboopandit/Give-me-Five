import React from "react";
import "../CSS/main.css";
import ListOfWords from "./list";

// Dummy list 
const letters = ["p", "L", "P", "T", "S", "A", "C", "E", "H", "D"];

// Using Pure.Component for handling rerendering
class Main extends React.PureComponent {
  // Initializing the state
  constructor() {
    super();
    this.state = {
      words: [],
      selectedLetters: "",
      letterCount: null,
    };
  }

  //Adding new word to the list 
  addNewWord = () => {
    let list = this.state.words,
      obj = {
        letter: this.state.selectedLetters,
        count: this.state.letterCount,
      };
    list.push(obj);
    this.setState({ words: list, selectedLetters: "", letterCount: null });
  };
  render() {
    return (
      <div className="container mt-3">
        <div className="d-flex flex-wrap justify-content-center mb-5">
          {/* iterating over a map */}
          {letters.map((letter) => (
            <button
              type="button"
              key={letter + 1}
              onClick={() =>
                this.setState({
                  selectedLetters: this.state.selectedLetters + letter,
                  letterCount: (this.state.selectedLetters + letter).length,
                })
              }
              className="btn btn-outline-danger btn-circle btn-xl m-3 font-weight-bold"
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Ternary operator for rendering conditionaly */}
        {this.state.selectedLetters.length > 0 ? (
          <>
            <ListOfWords
              letter={this.state.selectedLetters}
              count={this.state.letterCount}
            />
            <button
              type="button"
              onClick={this.addNewWord}
              className="btn btn-success px-3 font-weight-bold mb-5"
            >
              Add
            </button>
          </>
        ) : null}

        {/* Displaying a list */}
        {this.state.words.map((item) => (
          <ListOfWords letter={item.letter} count={item.count} key={item.letter+"is showing"}/>
        ))}
      </div>
    );
  }
}

export default Main;
