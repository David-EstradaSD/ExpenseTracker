import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [ // this is the array we are going to pass as 'props' to Chart.js
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 }, 
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for ( const expense of props.expenses ) { // iterate through the array, and update the values ( sum of the expenses in them )
        const expenseMonth = expense.date.getMonth(); // starting at 0 --> January = 0
        chartDataPoints[ expenseMonth ].value += expense.amount;
    }

    return (
        <Chart dataPoints={chartDataPoints}/>
    );
};

export default ExpensesChart;