import React from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-adapter-moment";

/**
 * x - x-axis: represents the time in years
 * y - y-axis: Life expectancy
 * r - radius: Show the size of the population
 */
const data = {
  datasets: [
    {
      label: "United States",
      data: [
        {
          x: "1960",
          y: 180671000,
          r: 10,
        },
        {
          x: "1961",
          y: 183691000,
        },
        {
          x: "1962",
          y: 186538000,
        },
        {
          x: "1963",
          y: 189242000,
        },
        {
          x: "1964",
          y: 191889000,
        },
        {
          x: "1965",
          y: 194303000,
        },
        {
          x: "1966",
          y: 196560000,
        },
        {
          x: "1967",
          y: 198712000,
        },
        {
          x: "1968",
          y: 200706000,
        },
        {
          x: "1969",
          y: 202677000,
        },
        {
          x: "1970",
          y: 205052000,
        },
      ],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "China",
      data: [
        {
          x: "1960",
          y: 667070000,
        },
        {
          x: "1961",
          y: 660330000,
        },
        {
          x: "1962",
          y: 665770000,
        },
        {
          x: "1963",
          y: 682335000,
        },
        {
          x: "1964",
          y: 698355000,
        },
        {
          x: "1965",
          y: 715185000,
        },
        {
          x: "1966",
          y: 735400000,
        },
        {
          x: "1967",
          y: 754550000,
        },
        {
          x: "1968",
          y: 774510000,
        },
        {
          x: "1969",
          y: 796025000,
        },
        {
          x: "1970",
          y: 818315000,
        },
      ],
      backgroundColor: "blue",
    },
  ],
};

const App: React.FC = () => {
  return (
    <Chart
      type="bubble"
      data={data}
      options={{
        scales: {
          x: {
            type: "time",
            axis: "x",
            ticks: {
              source: "auto",
            },
            time: {
              displayFormats: {
                year: "YYYY",
              },
              isoWeekday: false,
              unit: "year",
              stepSize: 1,
            },
          },
        },
      }}
    />
  );
};

export default App;
