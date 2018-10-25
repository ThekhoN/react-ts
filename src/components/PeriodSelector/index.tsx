import * as React from "react";
import YearSelector from "./YearSelector";
import QuarterSelector from "./QuarterSelector";
import MonthSelectorButton from "./MonthSelectorButton";

class PeriodSelector extends React.Component<{}, {}> {
  // TODO - REFACTOR & CORRECT
  dispatchSelectedYear = (selectedYear: number) => {
    console.log("dispatchSelectedYear: ", selectedYear);
  };
  dispatchSelectedQuarter = (selectedQuarter: string) => {
    console.log("dispatchSelectedQuarter: ", selectedQuarter);
  };
  dispatchSelectedMonth = (selectedMonth: string) => {
    console.log("dispatchSelectedMonth: ", selectedMonth);
  };
  closePeriodWidget = () => {
    console.log("close PeriodWidget!!!");
  };
  render() {
    return (
      <div>
        <h2>Period Selector</h2>
        <YearSelector
          shouldDispatchIfExceedsPeriodOther={true}
          selectedYear={2018}
          dispatchSelectedYear={this.dispatchSelectedYear}
        />
        <QuarterSelector
          disableSelectByQuarter={false}
          minQuarterValue="Q1"
          selectedQuarter="Q2"
          dispatchSelectedQuarter={this.dispatchSelectedQuarter}
          closePeriodWidget={this.closePeriodWidget}
          validLicensorPeriodFromYear={2015}
          selectedYear={2018}
          shouldInitallyAutoUpdate={true}
        />
        <MonthSelectorButton
          disableSelectByMonth={false}
          isDisabled={false}
          month="Jan"
          selectedMonth="Jun"
          onClick={this.dispatchSelectedMonth}
        />
      </div>
    );
  }
}

export default PeriodSelector;
