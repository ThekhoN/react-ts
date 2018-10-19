import * as React from "react";

// without Typecasting
// const withLoading = (Component) => {
//     return class WithLoading extends React.Component {
//         render(){
//             return () {
//                 const {loading, ...props} = this.props;
//                 return loading ? <h2>Loading...</h2> : <Component {...props} />
//             }
//         }
//     }
// }

interface WithLoadingProps {
  loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
  return class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      console.log("this.props inside withLoading: ", this.props);
      const { loading, ...props } = this.props as WithLoadingProps;
      return loading ? <h2>Loading...</h2> : <Component {...props} />;
    }
  };
};

export default withLoading;
