import * as React from "react";
import "./style.css";
import QuarterSelectorButton from "../QuarterSelectorButton";
import { quarterData } from "../../../utils/period-data";

interface IQuarterSelectorProps {
  disableSelectByQuarter: boolean;
  minQuarterValue: string;
  selectedQuarter: string;
  dispatchSelectedQuarter: (arg: string) => void;
  closePeriodWidget: () => void;
  validLicensorPeriodFromYear: number;
  selectedYear: number;
  shouldInitallyAutoUpdate: boolean;
}

class QuarterSelector extends React.Component<IQuarterSelectorProps> {
  renderIfValidLicensorPeriodFromYearEqualsSelectedYear = () => {
    const data = quarterData;
    const { disableSelectByQuarter, minQuarterValue } = this.props;

    let posOfMinQuarterValue = -1;
    quarterData.filter((q, index) => {
      if (q === minQuarterValue) {
        posOfMinQuarterValue = index;
        return true;
      } else {
        return false;
      }
    });
    return (
      <ul className="quarter-selector">
        {data.map((item, index) => {
          let shouldBeDisabledBasedOnMinQuarterValue = false;
          if (index < posOfMinQuarterValue) {
            shouldBeDisabledBasedOnMinQuarterValue = true;
          }
          return (
            <li
              key={item}
              className="quarter-selector__li quarter-selector__li--q"
            >
              <QuarterSelectorButton
                disableSelectByQuarter={
                  disableSelectByQuarter ||
                  shouldBeDisabledBasedOnMinQuarterValue
                }
                selectedQuarter={this.props.selectedQuarter}
                onClick={this.updateSelectedQuarter}
                quarter={item}
              />
            </li>
          );
        })}
      </ul>
    );
  };
  defaultRender = () => {
    const data = quarterData;
    const { disableSelectByQuarter } = this.props;

    return (
      <ul className="quarter-selector">
        {data.map(quarter => (
          <li
            key={quarter}
            className="quarter-selector__li quarter-selector__li--q"
          >
            <QuarterSelectorButton
              disableSelectByQuarter={disableSelectByQuarter}
              selectedQuarter={this.props.selectedQuarter}
              onClick={this.updateSelectedQuarter}
              quarter={quarter}
            />
          </li>
        ))}
      </ul>
    );
  };
  updateSelectedQuarter = (quarter: string) => {
    this.props.dispatchSelectedQuarter(quarter);
    this.props.closePeriodWidget();
  };
  render() {
    const {
      validLicensorPeriodFromYear,
      selectedYear,
      shouldInitallyAutoUpdate
    } = this.props;

    if (shouldInitallyAutoUpdate) {
      if (selectedYear === validLicensorPeriodFromYear) {
        return this.renderIfValidLicensorPeriodFromYearEqualsSelectedYear();
      } else {
        return this.defaultRender();
      }
    } else {
      if (selectedYear === validLicensorPeriodFromYear) {
        return this.renderIfValidLicensorPeriodFromYearEqualsSelectedYear();
      } else {
        return this.defaultRender();
      }
    }
  }
}

export default QuarterSelector;
