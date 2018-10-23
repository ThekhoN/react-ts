import * as React from "react";
import Button from "./Button";

const initialState = { count: 0 };
type State = Readonly<typeof initialState>;

class ButtonCounter extends React.Component<{}, State> {
  readonly state: State = initialState;
  incrementClicksCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrementClicksCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    const { count } = this.state;
    return (
      <React.Fragment>
        <h4>count: {count}</h4>
        <Button borderColor="orange" handleClick={this.incrementClicksCount}>
          +
        </Button>
        <Button borderColor="black" handleClick={this.decrementClicksCount}>
          -
        </Button>
      </React.Fragment>
    );
  }
}

export default ButtonCounter;
