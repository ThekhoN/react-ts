import * as React from "react";
import "./style.css";
import preventDefault from "../../../utils/preventDefault";

interface IMonthSelectorButton {
  disableSelectByMonth: boolean;
  isDisabled: boolean;
  month: string;
  selectedMonth: string;
  onClick: (arg: string) => void;
}

class MonthSelectorButton extends React.Component<IMonthSelectorButton> {
  onClick = () => {
    this.props.onClick(this.props.month);
  };
  render() {
    const {
      month,
      selectedMonth,
      disableSelectByMonth,
      isDisabled
    } = this.props;
    const isSelectedClass = month === selectedMonth ? "selected" : "";
    if (disableSelectByMonth || isDisabled) {
      return (
        <button
          className={"period-selector__button disabled"}
          onClick={preventDefault}
        >
          <span className="period-selector__button-span period-selector__button-span-month">
            {month}
          </span>
        </button>
      );
    } else {
      return (
        <button
          className={`period-selector__button ${isSelectedClass}`}
          onClick={this.onClick}
        >
          <span className="period-selector__button-span period-selector__button-span-month">
            {month}
          </span>
        </button>
      );
    }
  }
}

export default MonthSelectorButton;
