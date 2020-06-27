import React from "react";

const Action = (props) => {
  return (
    <div>
      <button
        className="big_button"
        disabled={props.disable}
        onClick={props.pickOption}
      >
        What should i do
      </button>
    </div>
  );
};

export default Action;
