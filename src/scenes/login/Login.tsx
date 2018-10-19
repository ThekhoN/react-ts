import * as React from "react";

interface IUserProps {
  name: string;
  profile: string;
}

class Login extends React.Component<IUserProps, {}> {
  render() {
    console.log("this.props: ", this.props);
    return <div>Login: {this.props.name}</div>;
  }
}

export default Login;
