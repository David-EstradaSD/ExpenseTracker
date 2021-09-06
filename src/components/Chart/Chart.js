import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

// instead of building 12 individual ChartBar custom components in the JSX...
// let's output the chart bars dynamically by going through an array of data points
// and mapping every data point to a chart bar ( output lists of data dynamically )

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // we use map and convert the array into an array of numbers ( 12 months => 12 values )
    // since we're trying to extract the number (int) value of the highest expense in our array
    const totalMaximum = Math.max(...dataPointsValues);
    // pull out 12 values of our new numbers array and find the max

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
