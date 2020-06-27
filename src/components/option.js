import React from "react";
const Option = (props) => (
  <div className="option">
    <div className="option__text">{props.count}-  {props.optionText}</div>
    <button className="button button--link"
      onClick={(event) => {
        props.deleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
