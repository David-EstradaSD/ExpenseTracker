import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {

    let barFillHeight = '0%'; // this is assigned a CSS style 

    if (props.maxValue> 0) { // we could have a month will max = 0 ( if we have a month with no expenses )
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
        // this gives us the percentage by which the bar's filled and converts to a string with the % concatenation 
        // we can then target 
    }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
