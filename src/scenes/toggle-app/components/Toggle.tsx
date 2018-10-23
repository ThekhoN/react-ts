import * as React from "react";

interface ITogglePropsChildren {
  on: boolean;
  toggle: () => void;
}

interface IToggleState {
  on: boolean;
}

interface IToggleProps {
  children(props: ITogglePropsChildren): JSX.Element;
}

class Toggle extends React.Component<IToggleProps, IToggleState> {
  state = {
    on: false
  };
  toggleStateOn = () => {
    this.setState({ on: !this.state.on });
  };
  renderHelpers() {
    return {
      on: this.state.on,
      toggle: this.toggleStateOn
    };
  }
  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggleStateOn
    });
  }
}

export default Toggle;
