import * as React from "react";

interface IUserProps {
  name: string;
  profile: string;
}

interface ExampleProps {
  name: string;
}

const Example: React.SFC<ExampleProps> = props => {
  return <h3>Stuff: {props.name}</h3>;
};

const data = { name: "gone case!" };

interface NumberDisplayerProps {
  number: number;
}

const NumberDisplayer: React.SFC<NumberDisplayerProps> = props => (
  <div>Number: {props.number}</div>
);

class Login extends React.Component<IUserProps, {}> {
  state = {
    loading: true
  };
  render() {
    return (
      <div>
        <NumberDisplayer number={2} />
        <Example {...data} />
        <React.Fragment>Login: {this.props.name}</React.Fragment>
      </div>
    );
  }
}

export default Login;
