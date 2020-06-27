import React from "react";
import Option from "./option";
const Options = (props) => {
  let index = 0;
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your options</h3>
        <button className="button button--link" onClick={props.deleteOptions}>
          Remove All
        </button>
      </div>
      {props.options.length === 0 && (
        <p className="widget__message">Please add an option to get started</p>
      )}

      {props.options.map((option) => {
        index++
        return (
          <Option
            key={index}
            count={index}
            optionText={option}
            deleteOption={props.deleteOption}
          />
        );
      })}
    </div>
  );
};

export default Options;
