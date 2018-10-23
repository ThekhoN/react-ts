import * as React from "react";

interface ISwitchProps {
  on: boolean;
  toggleSwitch: () => void;
}

class Switch extends React.Component<ISwitchProps, {}> {
  render() {
    const { on, toggleSwitch } = this.props;
    const content = on ? "Switch is ON" : "Switch is OFF";
    return (
      <div className="switch">
        <h3>{content}</h3>
        <button onClick={toggleSwitch}>click</button>
      </div>
    );
  }
}

export default Switch;
