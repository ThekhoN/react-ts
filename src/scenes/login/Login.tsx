import * as React from "react";
// import Switch from "../../components/Switch";
import Toggle from "../../components/Toggle";
import withLoading from "../../hoc/WithLoading";

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

class Login extends React.Component<IUserProps, {}> {
  state = {
    loading: true
  };
  render() {
    const ToggleWithLoading = withLoading(Toggle);
    return (
      <div>
        <Example {...data} />
        <ToggleWithLoading loading={this.state.loading} />
        <React.Fragment>Login: {this.props.name}</React.Fragment>
      </div>
    );
  }
}

export default Login;
