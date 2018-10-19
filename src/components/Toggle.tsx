import * as React from "react";

class Toggle extends React.Component {
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
    // return this.props.children(this.renderHelpers());
    return <div>test</div>;
  }
}

export default Toggle;
