import * as React from "react";

interface ILoadingWrapperProps {
  loading: boolean;
  children: React.ReactChild | React.ReactChildren;
}

class LoadingWrapper extends React.Component<ILoadingWrapperProps, {}> {
  render() {
    if (this.props.loading) {
      return <h3>Loading. . .</h3>;
    } else {
      return this.props.children;
    }
  }
}

export default LoadingWrapper;
