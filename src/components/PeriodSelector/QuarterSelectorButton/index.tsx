import * as React from "react";
import "./style.css";
import preventDefault from "../../../utils/preventDefault";

interface IQuarterSelectorButtonProps {
  quarter: string;
  onClick: (arg: string) => void;
  selectedQuarter: string;
  disableSelectByQuarter: boolean;
}

class QuarterSelectorButton extends React.Component<
  IQuarterSelectorButtonProps,
  {}
> {
  onClick = () => {
    this.props.onClick(this.props.quarter);
  };
  render() {
    const { quarter, selectedQuarter, disableSelectByQuarter } = this.props;
    const isSelectedClass = quarter === selectedQuarter ? "selected" : "";
    if (disableSelectByQuarter) {
      return (
        <button
          className={"quarter-selector__button disabled"}
          onClick={preventDefault}
        >
          {quarter}
        </button>
      );
    } else {
      return (
        <button
          className={`quarter-selector__button ${isSelectedClass}`}
          onClick={this.onClick}
        >
          {quarter}
        </button>
      );
    }
  }
}

export default QuarterSelectorButton;
