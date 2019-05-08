import React from "react";

class CardPanel extends React.Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">SUMMARY</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            className="btn"
            style={{
              backgroundColor: "#e91e63",
              color: "white",
              fontWeight: "bold"
            }}
          >
            SAVE PROGRESS
          </button>
        </div>
      </div>
    );
  }
}

export default CardPanel;
