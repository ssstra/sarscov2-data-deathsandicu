import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data, state }) => {
  const { allDeaths, allIcubeds } = Object.values(data).reduce(
    (result, datum) => {
      result.allDeaths += datum.deaths;
      result.allIcubeds += datum.icubeds;

      return result;
    },
    { allDeaths: 0, allIcubeds: 0 }
  );

  const barChart = (
    <Bar
      data={{
        labels: ["Deaths", "ICU Patients"],
        datasets: [
          {
            label: "Persons",
            backgroundColor: [
              "rgb(226, 0, 11, 0.7)",
              "rgba(56, 255, 238, 0.7)",
            ],
            data: [allDeaths, allIcubeds],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true },
        plugins: {
          legend: {
            display: true,
            labels: {
              color: "rgb(211, 217, 230)",
            },
          },
        },
      }}
    />
  );

  return <div className={styles.container}>{barChart}</div>;
};

export default Chart;
