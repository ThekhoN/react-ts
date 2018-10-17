import * as React from "react";

interface UserProps {
  name: string;
  profile: string;
}

class Login extends React.Component<UserProps, {}> {
  render() {
    console.log("this.props: ", this.props);
    return <div>Login: {this.props.name}</div>;
  }
}

export default Login;
