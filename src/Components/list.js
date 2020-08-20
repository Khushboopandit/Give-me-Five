import React from "react";

// Component for showing the word and word length
class ListOfWords extends React.PureComponent {
  render() {
    return (
      <div className="d-flex justify-content-between font-weight-bold f-38">
          <p className="dotted-line">{this.props.letter}</p> <div className="rounded-circle bg-danger div-circular text-light justify-content-center d-flex"><span className="align-self-center">{this.props.count}</span></div>
      </div>
    );
  }
}

export default ListOfWords;
