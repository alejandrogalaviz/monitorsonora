import React from "react";
import { Bar, HorizontalBar, Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { getDates } from "../utils/dateUtils";

const ChartSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.3rem 0.7rem 0;
  display: flex;
  position: relative;
`;

const ChartPieSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem;

  @media (max-width: 960px) {
    padding: 0 1rem 0.4rem;
  }
`;

const datesArray = getDates(new Date("05/14/2020"), new Date("05/21/2020"));

const confirmed = {
  labels: ["24/05/2020", "", "31/05/2020"],
  datasets: [
    {
      label: "Confirmados Diarios",
      pointBorderColor: "hsla(163, 72%, 48%, 1.0)",
      pointBackgroundColor: "hsla(163, 72%, 48%, 0.7)",
      backgroundColor: "hsla(163, 72%, 48%, .4)",
      borderColor: "hsla(163, 72%, 48%, 1.0)",
      borderWidth: 1,
      hoverBackgroundColor: "hsla(163, 72%, 48%, .9)",
      hoverBorderColor: "hsla(163, 72%, 48%, 1)",
      pointRadius: 6,
      pointStyle: "mitter",
      showLines: false,
      lineTension: 0.3,
      data: [1599, 0, 2386],
    },
  ],
};

export function DemoChart2() {
  return (
    <>
      <ChartSection>
        <Bar
          data={confirmed}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: "top",
              fullWidth: true,
              reverse: false,
              labels: {
                fontColor: "hsla(163, 72%, 48%, 1)",
              },
            },
            scales: {
              yAxes: [
                {
                  // type: 'logarithmic'
                },
              ],
            },
          }}
        />
      </ChartSection>
    </>
  );
}

const accumulated = {
  labels: datesArray.map((date) => date.displayFormat),
  datasets: [
    {
      label: "Casos Totales",
      type: "line",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "rgba(75,192,192,1)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [790, 856, 905, 981, 1037, 1110, 1189, 1274],
    },
  ],
};

export function DemoChart() {
  return (
    <>
      <ChartSection>
        <Bar
          data={accumulated}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: "top",
              fullWidth: true,
              reverse: false,
              labels: {
                fontColor: "hsla(163, 72%, 48%, 1)",
              },
            },
            scales: {
              yAxes: [
                {
                  // type: 'logarithmic'
                },
              ],
            },
          }}
        />
      </ChartSection>
    </>
  );
}
