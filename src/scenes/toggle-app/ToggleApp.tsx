import * as React from "react";
import Toggle from "./components/Toggle";

const ToggleApp: React.SFC = props => {
  return (
    <div>
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <h2>On: {on.toString()}</h2>
            <button onClick={toggle}>switch toggle</button>
          </div>
        )}
      </Toggle>
    </div>
  );
};

export default ToggleApp;
