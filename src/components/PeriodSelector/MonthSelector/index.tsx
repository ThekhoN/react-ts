import * as React from "react";
import "./style.css";
import MonthSelectorButton from "../MonthSelectorButton";
import { monthData } from "../../../utils/period-data";

const monthDataStringified = monthData.map(p => JSON.stringify(p));

interface IMonthSelectorProps {
  dispatchSelectedMonth: (month: string) => void;
  closePeriodWidget: () => void;
  disableSelectByMonth: boolean;
  validLicensorPeriodFromMonth: string;
  selectedMonth: string;
  selectedOtherMonth: string;
}

class MonthSelector extends React.Component<IMonthSelectorProps> {
  updateSelectedMonth = (month: string) => {
    this.props.dispatchSelectedMonth(month);
    this.props.closePeriodWidget();
  };
  defaultRender = () => {
    return (
      <ul className="period-selector">
        {monthData.map(month => (
          <li key={month} className="period-selector__li ">
            <MonthSelectorButton
              isDisabled={false}
              month={month}
              onClick={this.updateSelectedMonth}
              selectedMonth={this.props.selectedMonth}
              disableSelectByMonth={this.props.disableSelectByMonth}
            />
          </li>
        ))}
      </ul>
    );
  };
  renderPeriodFromWhenSelectedYearEqualsSelectedYearOther = () => {
    const { selectedOtherMonth } = this.props;
    const { disableSelectByMonth } = this.props;
    const selectedOtherMonthStringified = JSON.stringify(selectedOtherMonth);
    const indexSelectedOtherMonth = monthDataStringified.indexOf(
      selectedOtherMonthStringified
    );
    return (
      <ul className="period-selector">
        {monthData.map((month, index) => {
          if (indexSelectedOtherMonth < index) {
            return (
              <li key={month.value} className="period-selector__li ">
                <MonthSelectorButton
                  isDisabled={true}
                  month={month}
                  onClick={this.updateSelectedMonth}
                  selectedPeriod={this.props.selectedPeriod}
                  disableSelectByMonth={disableSelectByMonth}
                />
              </li>
            );
          } else {
            return (
              <li key={month.value} className="period-selector__li ">
                <MonthSelectorButton
                  isDisabled={false}
                  month={month}
                  onClick={this.updateSelectedMonth}
                  selectedPeriod={this.props.selectedPeriod}
                  disableSelectByMonth={disableSelectByMonth}
                />
              </li>
            );
          }
        })}
      </ul>
    );
  };
  renderWhenSelectedYearEqualsLicensorPeriodFromYear = () => {
    const { disableSelectByMonth, validLicensorPeriodFromMonth } = this.props;
    const data = monthData;
    const validLicensorPeriodFromMonthStringified = JSON.stringify(
      validLicensorPeriodFromMonth
    );
    const indexValidLicensorPeriodFromMonth = monthDataStringified.indexOf(
      validLicensorPeriodFromMonthStringified
    );
    return (
      <ul className="period-selector">
        {data.map((month, index) => {
          if (index < indexValidLicensorPeriodFromMonth) {
            return (
              <li key={month.value} className="period-selector__li ">
                <MonthSelectorButton
                  isDisabled={true}
                  month={month}
                  onClick={this.updateSelectedMonth}
                  selectedPeriod={this.props.selectedPeriod}
                  disableSelectByMonth={disableSelectByMonth}
                />
              </li>
            );
          } else {
            return (
              <li key={month.value} className="period-selector__li ">
                <MonthSelectorButton
                  isDisabled={false}
                  month={month}
                  onClick={this.updateSelectedMonth}
                  selectedPeriod={this.props.selectedPeriod}
                  disableSelectByMonth={disableSelectByMonth}
                />
              </li>
            );
          }
        })}
      </ul>
    );
  };
  render() {
    const {
      selectedYear,
      validLicensorPeriodFromYear,
      shouldDispatchIfExceedsPeriodOther,
      selectedYearOther
    } = this.props;
    if (shouldDispatchIfExceedsPeriodOther) {
      if (
        selectedYear !== "" &&
        selectedYear === selectedYearOther &&
        selectedYear !== validLicensorPeriodFromYear
      ) {
        return this.defaultRender();
      } else {
        if (
          selectedYear !== "" &&
          selectedYear === validLicensorPeriodFromYear
        ) {
          return this.renderWhenSelectedYearEqualsLicensorPeriodFromYear();
        } else {
          return this.defaultRender();
        }
      }
    } else {
      if (selectedYear !== "" && selectedYear === selectedYearOther) {
        if (selectedYear === validLicensorPeriodFromYear) {
          return this.renderWhenSelectedYearEqualsLicensorPeriodFromYear();
        } else {
          return this.defaultRender();
        }
      } else if (
        selectedYear !== "" &&
        selectedYear === validLicensorPeriodFromYear
      ) {
        return this.renderWhenSelectedYearEqualsLicensorPeriodFromYear();
      } else {
        return this.defaultRender();
      }
    }
  }
}

MonthSelector.propTypes = {
  dispatchResetNotification: PropTypes.func.isRequired,
  dispatchNotificationTypeHandler: PropTypes.func.isRequired,
  dispatchNotificationMessageHandler: PropTypes.func.isRequired,
  dispatchNotificationShowHandler: PropTypes.func.isRequired,
  dispatchNotificationHideHandler: PropTypes.func.isRequired,
  selectedOtherMonth: PropTypes.object.isRequired,
  selectedYearOther: PropTypes.string.isRequired,
  selectedYear: PropTypes.string.isRequired,
  validLicensorPeriodFromYear: PropTypes.string.isRequired,
  validLicensorPeriodFromMonth: PropTypes.object.isRequired,
  selectedPeriod: PropTypes.object.isRequired,
  disableSelectByMonth: PropTypes.bool.isRequired,
  dispatchSelectedMonth: PropTypes.func.isRequired,
  shouldDispatchIfExceedsPeriodOther: PropTypes.bool.isRequired
};

export default MonthSelector;
