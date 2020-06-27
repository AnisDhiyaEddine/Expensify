import React from "react";
import AddOption from "./addOption";
import Header from "./header";
import Options from "./options";
import Action from "./action";
import OptionModal from "./optionModal";

let subtitile = "ola ola";
export default class Indecision extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  deleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  deleteOption = (optionText) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return option !== optionText;
        }),
      };
    });
  };
  pickOption = () => {
    let index = Math.floor(Math.random() * this.state.options.length);
    this.setState((prevState) => ({
      selectedOption: prevState.options[index],
    }));
  };

  deletePickedOption = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };
  addOption = (option) => {
    if (!option) {
      return "Please enter a valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option duplicated";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  componentDidMount() {
    try {
      let options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  //prevProps prevState
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.options);
    if (prevState.options.length !== this.state.options.length) {
      let options = JSON.stringify(this.state.options);
      localStorage.setItem("options", options);
    }
  }

  // componentWillUnmoount
  render() {
    return (
      <div>
        <Header subtitile={subtitile} />
        <div className="container">
          <Action
            pickOption={this.pickOption}
            disable={this.state.options.length == 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              deleteOptions={this.deleteOptions}
              deleteOption={this.deleteOption}
            />
            <AddOption addOption={this.addOption} />
          </div>
        </div>

        <OptionModal
          open={this.state.selectedOption}
          close={this.deletePickedOption}
        />
      </div>
    );
  }
}

Header.defaultProps = {
  title: "Indecision",
};
