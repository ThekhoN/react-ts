import * as React from "react";

interface InjectedCounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

interface IMakeCounterState {
  value: number;
}

interface IMakeCounterProps {
  maxValue?: number;
  minValue?: number;
  children(props: InjectedCounterProps): JSX.Element;
}

class MakeCounter extends React.Component<
  IMakeCounterProps,
  IMakeCounterState
> {
  state = {
    value: 0
  };
  increment = () => {
    this.setState(prevState => ({
      value:
        prevState.value === this.props.maxValue
          ? prevState.value
          : prevState.value + 1
    }));
  };
  decrement = () => {
    this.setState(prevState => ({
      value:
        prevState.value === this.props.minValue
          ? prevState.value
          : prevState.value - 1
    }));
  };
  render() {
    return this.props.children({
      value: this.state.value,
      onIncrement: this.increment,
      onDecrement: this.decrement
    });
  }
}

export default MakeCounter;
