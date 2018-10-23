import * as React from "react";

interface IUserProps {
  name: string;
  profile: string;
}

class Login extends React.Component<IUserProps, {}> {
  state = {
    loading: true
  };
  render() {
    return (
      <div>
        <React.Fragment>Login: {this.props.name}</React.Fragment>
      </div>
    );
  }
}

export default Login;
