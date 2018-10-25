import * as React from "react";

import "./style.css";

interface IYearSelectorProps {
  shouldDispatchIfExceedsPeriodOther: boolean;
  selectedYear: number;
  dispatchSelectedYear: (arg: number) => void;
}

interface IYearSelectorState {
  selectedYear: number;
  disableIncrement: boolean;
  disableDecrement: boolean;
  error: string;
}

class YearSelector extends React.Component<
  IYearSelectorProps,
  IYearSelectorState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedYear: this.props.selectedYear,
      disableIncrement: false,
      disableDecrement: false,
      error: ""
    };
    this.updateSelectedYear = this.updateSelectedYear.bind(this);
    this.incrementYear = this.incrementYear.bind(this);
    this.decrementYear = this.decrementYear.bind(this);
  }
  componentWillReceiveProps(nextProps: any) {
    if (nextProps.selectedYear !== this.state.selectedYear) {
      this.setState({
        selectedYear: nextProps.selectedYear
      });
    }
    // after props have been populated
    if (nextProps.validLicensorPeriodFrom !== "") {
      const minYear = nextProps.validLicensorPeriodFrom.substr(0, 4);
      if (parseInt(minYear, 8) === parseInt(nextProps.selectedYear, 8)) {
        this.setState({
          disableDecrement: true
        });
      } else {
        this.setState({
          disableDecrement: false
        });
      }
    }
  }
  incrementYear() {
    const { selectedYear } = this.state;
    this.setState(
      {
        selectedYear: selectedYear + 1
      },
      () => {
        this.props.dispatchSelectedYear(this.state.selectedYear);
      }
    );
  }
  decrementYear() {
    const { selectedYear } = this.state;
    if (this.state.disableDecrement) {
      return;
    }
    this.setState(
      {
        selectedYear: selectedYear - 1
      },
      () => {
        this.props.dispatchSelectedYear(this.state.selectedYear);
      }
    );
  }
  updateSelectedYear() {
    this.props.dispatchSelectedYear(this.state.selectedYear);
  }
  render() {
    const { disableDecrement, disableIncrement } = this.state;
    const classDisableDecrement = disableDecrement ? "disabled" : "";
    const classDisableIncrement = disableIncrement ? "disabled" : "";
    return (
      <div className="year-selector">
        <button
          className={`year-selector__button year-selector__button--decrement ${classDisableDecrement}`}
          onClick={this.decrementYear}
        >
          <span className="year-selector__icon-span">◀</span>
          <span className="a11y-hidden">select previous year</span>
        </button>
        <input
          className="year-selector__button year-selector__button--input"
          onClick={this.updateSelectedYear}
          value={this.state.selectedYear}
          type="button"
        />
        <button
          className={`year-selector__button year-selector__button--increment ${classDisableIncrement}`}
          onClick={this.incrementYear}
        >
          <span className="year-selector__icon-span">▶</span>
          <span className="a11y-hidden">select next year</span>
        </button>
      </div>
    );
  }
}

export default YearSelector;
