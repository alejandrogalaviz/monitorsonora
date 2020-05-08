import React from "react";
import { Bar, HorizontalBar, Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { getDates } from "../utils/dateUtils";
import SonoraData from "../db/SonoraData";

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

const datesArray = getDates(new Date("03/15/2020"), new Date());

const confirmed = {
  labels: datesArray.map((date) => date.displayFormat),
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
      data: [
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        3,
        0,
        2,
        4,
        3,
        0,
        1,
        3,
        1,
        6,
        1,
        4,
        3,
        3,
        9,
        7,
        14,
        14,
        3,
        2,
        9,
        12,
        8,
        7,
        9,
        19,
        5,
        8,
        16,
        18,
        15,
        10,
        21,
        15,
        7,
        21,
        17,
        15,
        15,
        29,
        28,
        0,
        59,
        34,
      ],
    },
  ],
};

export function ConfirmedChart() {
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
      pointBorderColor: "hsla(163, 72%, 48%, 1.0)",
      pointBackgroundColor: "hsla(163, 72%, 48%, 0.7)",
      backgroundColor: "transparent",
      borderColor: "hsla(163, 72%, 48%, 1.0)",
      borderWidth: 1,
      hoverBackgroundColor: "hsla(163, 72%, 48%, .9)",
      hoverBorderColor: "hsla(163, 72%, 48%, 1)",
      pointRadius: 6,
      pointStyle: "mitter",
      showLines: false,
      lineTension: 0.3,
      data: [
        0,
        1,
        1,
        2,
        2,
        2,
        3,
        4,
        4,
        5,
        8,
        8,
        10,
        14,
        17,
        17,
        18,
        21,
        22,
        28,
        29,
        33,
        36,
        39,
        48,
        55,
        69,
        83,
        86,
        88,
        97,
        109,
        117,
        124,
        133,
        152,
        157,
        165,
        181,
        199,
        214,
        224,
        245,
        260,
        267,
        288,
        305,
        320,
        335,
        364,
        392,
        392,
        451,
        485,
      ],
    },
    {
      label: "Decesos Totales",
      type: "line",
      pointBorderColor: "hsla(0, 100%, 67%, 1.0)",
      pointBackgroundColor: "hsla(0, 100%, 67%, 0.7)",
      backgroundColor: "transparent",
      borderColor: "hsla(0, 100%, 67%, 1.0)",
      borderWidth: 1.5,
      pointRadius: 6,
      pointStyle: "mitter",
      showLines: false,
      lineTension: 0.3,
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        4,
        5,
        5,
        8,
        8,
        8,
        12,
        12,
        12,
        12,
        14,
        14,
        16,
        16,
        17,
        17,
        22,
        22,
        24,
        26,
        26,
        30,
        31,
        34,
        34,
        35,
        35,
        37,
        41,
        41,
        44,
        45,
      ],
    },
  ],
};

export function AccumulatedChart() {
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

const labels = SonoraData.map((province) => province.name);
const confirmedCases = SonoraData.map((province) => province.confirmed);
const confirmedByProvince = {
  labels: labels,
  datasets: [
    {
      label: "Confirmados por Municipio",
      backgroundColor: "hsla(163, 72%, 48%, .4)",
      borderColor: "hsla(163, 72%, 48%, 1.0)",
      borderWidth: 1,
      hoverBackgroundColor: "hsla(163, 72%, 48%, .9)",
      hoverBorderColor: "hsla(163, 72%, 48%, 1)",
      data: confirmedCases,
    },
  ],
};

export function ConfirmedByProvinceChart() {
  return (
    <>
      <ChartSection>
        <HorizontalBar
          data={confirmedByProvince}
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
          }}
        />
      </ChartSection>
    </>
  );
}

const data = {
  labels: [
    "Recuperados 12.784%",
    "Estables/Domicilio - 71.340%",
    "Estables/Hospital - 2.062%",
    "Graves/Hospital - 4.536%",
    "Fallecidos - 9.278%",
  ],
  datasets: [
    {
      data: [62, 346, 10, 22, 45],
      borderColor: "hsla(164, 23%, 3%, 0.6)",
      backgroundColor: [
        "hsla(163, 72%, 100%, 0.9)",
        "hsla(163, 72%, 48%, 0.7)",
        "hsla(50, 100%, 64%, 0.7)",
        "hsla(25, 100%, 67%, 0.7)",
        "hsla(0, 100%, 67%, 0.7)",
      ],
      hoverBackgroundColor: [
        "hsla(163, 72%, 100%, 1.0)",
        "hsla(163, 72%, 48%, 1.0)",
        "hsla(50, 100%, 64%, 1.0)",
        "hsla(25, 100%, 67%, 1.0)",
        "hsla(0, 100%, 67%, 1.0)",
      ],
    },
  ],
};

export function DetailsChart() {
  return (
    <ChartPieSection>
      <Doughnut
        data={data}
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
        }}
      />
    </ChartPieSection>
  );
}
