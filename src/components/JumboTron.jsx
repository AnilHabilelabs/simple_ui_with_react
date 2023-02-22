import React from "react";
import "./Cards.css";

const JumboTron = (props) => {
  return (
    <>
      <div className="container">
        <div className={`${props.background} card`}>
          <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text"> {props.descriptionn} </p>
            <div className="btn">
              <button>{props.title}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default JumboTron;
