import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  addOption = (event) => {
    event.preventDefault();
    this.setState(() => ({ error: "" }));

    let option = event.target.elements.addOption.value;
    event.target.elements.addOption.value = "";
    let error = this.props.addOption(option);
    if (error) {
      console.log(error);
      this.setState(() => ({ error }));
    }
  };
  render() {
    return (
      <div>
        <p className="add-option-error">{this.state.error}</p>
        <form className="add-option" onSubmit={this.addOption}>
          <input className="add-option__input" name="addOption" />
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}
