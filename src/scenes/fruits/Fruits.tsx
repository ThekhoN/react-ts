import * as React from "react";
import URL from "../../services/url";
import axios from "axios";
import withLoading from "../../hoc/WithLoading";
import FruitsList from "./components/FruitsList";
// import LoadingWrapper from "../../components/LoadingWrapper";
import SearchInput from "../../components/SearchInput";

export interface IFruitDetails {
  id: string;
  createdAt: number;
  data: string;
}

interface IFruitsState {
  data: IFruitDetails[];
  allData: IFruitDetails[];
  loading: boolean;
  searchTerm: string;
}

const FruitsListWithLoading = withLoading(FruitsList);

class Fruits extends React.Component<{}, IFruitsState> {
  //   static defaultProps = {};
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      allData: [],
      data: [],
      searchTerm: ""
    };
  }
  async componentDidMount() {
    this.setState({
      loading: true
    });
    const res = await axios.get(URL);
    this.setState({
      data: res.data,
      allData: res.data,
      loading: false
    });
  }
  updateSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const searchTerm = e.target.value;
      const searchedData = this.state.data.filter(
        dataObj =>
          dataObj.data.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
      this.setState({
        searchTerm,
        data: searchedData
      });
    } else {
      this.setState({ data: this.state.allData });
    }
  };
  render() {
    return (
      <div>
        <h2>Fruits</h2>
        <SearchInput
          placeholder="search fruit"
          updateSearchTerm={this.updateSearchTerm}
        />
        <FruitsListWithLoading
          loading={this.state.loading}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default Fruits;
