import React from "react";
import { Bar, HorizontalBar, Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { getDates } from "../utils/dateUtils";
import SonoraData from "../db/SonoraData";
import chartsData from "../db/ChartsData";
import { Helmet } from "react-helmet";

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
      data: chartsData.confirmadosDiario,
    },
  ],
};

export function ConfirmedChart() {
  return (
    <>
      <Helmet>
        <title>Casos diarios | Monitor COVID-19</title>
        <meta
          name="description"
          content="Casos confirmados por día en Sonora de Coronavirus"
        />

        <meta itemprop="name" content="Casos diarios | Monitor COVID-19" />
        <meta
          itemprop="description"
          content="Casos confirmados por día en Sonora de Coronavirus"
        />
        <meta
          itemprop="image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta property="og:url" content="https://monitorsonora.com/contagios" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Casos diarios | Monitor COVID-19" />
        <meta
          property="og:description"
          content="Casos confirmados por día en Sonora de Coronavirus"
        />
        <meta
          property="og:image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Casos diarios | Monitor COVID-19" />
        <meta
          name="twitter:description"
          content="Casos confirmados por día en Sonora de Coronavirus"
        />
        <meta
          name="twitter:image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />
      </Helmet>
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
const datesArrayDecesos = getDates(new Date("04/04/2020"), new Date());

const dailyDeaths = {
  labels: datesArrayDecesos.map((date) => date.displayFormat),
  datasets: [
    {
      label: "Decesos Diarios",
      pointBorderColor: "hsla(0, 100%, 67%, 1.0)",
      pointBackgroundColor: "hsla(0, 100%, 67%, 0.7)",
      backgroundColor: "hsla(0, 100%, 67%, .4)",
      borderColor: "hsla(0, 100%, 67%, 1.0)",
      borderWidth: 1,
      hoverBackgroundColor: "hsla(0, 100%, 67%, .9)",
      hoverBorderColor: "hsla(0, 100%, 67%, 1)",
      pointRadius: 6,
      pointStyle: "mitter",
      showLines: false,
      lineTension: 0.3,
      data: chartsData.decesosDiarios,
    },
  ],
};

export function DailyDeathsChart() {
  return (
    <>
      <Helmet>
        <title>Decesos diarios | Monitor COVID-19</title>
        <meta
          name="description"
          content="Decesos confirmados por día en Sonora de Coronavirus"
        />

        <meta itemprop="name" content="Decesos diarios | Monitor COVID-19" />
        <meta
          itemprop="description"
          content="Decesos confirmados por día en Sonora de Coronavirus"
        />
        <meta
          itemprop="image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta property="og:url" content="https://monitorsonora.com/contagios" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Decesos diarios | Monitor COVID-19"
        />
        <meta
          property="og:description"
          content="Decesos confirmados por día en Sonora de Coronavirus"
        />
        <meta
          property="og:image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Decesos diarios | Monitor COVID-19"
        />
        <meta
          name="twitter:description"
          content="Decesos confirmados por día en Sonora de Coronavirus"
        />
        <meta
          name="twitter:image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />
      </Helmet>
      <ChartSection>
        <Bar
          data={dailyDeaths}
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
                fontColor: "hsla(0, 100%, 67%, 1)",
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
      data: chartsData.confirmadosTotal,
    },
    {
      label: "Decesos Totales",
      type: "line",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "hsla(0, 100%, 67%,0.4)",
      borderColor: "hsla(0, 100%, 67%,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "hsla(0, 100%, 67%,1)",
      pointBackgroundColor: "hsla(0, 100%, 67%,1)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "hsla(0, 100%, 67%,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: chartsData.decesos,
    },
    {
      label: "Recuperados Totales",
      type: "line",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "hsla(167, 22%, 78%,0.4)",
      borderColor: "hsla(167, 22%, 78%,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "hsla(167, 22%, 78%,1)",
      pointBackgroundColor: "hsla(167, 22%, 78%,1)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "hsla(167, 22%, 78%,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: chartsData.recuperados,
    },
  ],
};

export function AccumulatedChart() {
  return (
    <>
      <Helmet>
        <title>Casos Totales | Monitor COVID-19</title>
        <meta
          name="description"
          content="Casos totales de COVID-19 en Sonora"
        />

        <meta itemprop="name" content="Casos Totales | Monitor COVID-19" />
        <meta
          itemprop="description"
          content="Casos totales de COVID-19 en Sonora"
        />
        <meta
          itemprop="image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta
          property="og:url"
          content="https://monitorsonora.com/casos-totales"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Casos Totales | Monitor COVID-19" />
        <meta
          property="og:description"
          content="Casos totales de COVID-19 en Sonora"
        />
        <meta
          property="og:image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Casos Totales | Monitor COVID-19" />
        <meta
          name="twitter:description"
          content="Casos totales de COVID-19 en Sonora"
        />
        <meta
          name="twitter:image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />
      </Helmet>
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
const labelsDeaths = SonoraData.map((province) => province.name);
const confirmedDeaths = SonoraData.map((province) => province.deaths);
const DeathsByProvince = {
  labels: labelsDeaths,
  datasets: [
    {
      label: "Decesos por Municipio",
      backgroundColor: "hsla(0, 100%, 67%, .4)",
      borderColor: "hsla(0, 100%, 67%, 1.0)",
      borderWidth: 1,
      hoverBackgroundColor: "hsla(0, 100%, 67%, .9)",
      hoverBorderColor: "hsla(0, 100%, 67%, 1)",
      data: confirmedDeaths,
    },
  ],
};

export function DeathsByProvinceChart() {
  return (
    <>
      <Helmet>
        <title>Decesos por municipio | Monitor COVID-19</title>
        <meta
          name="description"
          content="Distribución de decesos confirmados por municipio en Sonora de Coronavirus (COVID-19/SARS-COV-2)"
        />

        <meta
          itemprop="name"
          content="Decesos por municipio | Monitor COVID-19"
        />
        <meta
          itemprop="description"
          content="Distribución de decesos confirmados por municipio en Sonora de Coronavirus (COVID-19/SARS-COV-2)"
        />
        <meta
          itemprop="image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta
          property="og:url"
          content="https://monitorsonora.com/contagios-municipio"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Decesos por municipio | Monitor COVID-19"
        />
        <meta
          property="og:description"
          content="Distribución de decesos confirmados por municipio en Sonora de Coronavirus (COVID-19/SARS-COV-2)"
        />
        <meta
          property="og:image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Decesos por municipio | Monitor COVID-19"
        />
        <meta
          name="twitter:description"
          content="Distribución de decesos confirmados por municipio en Sonora de Coronavirus (COVID-19/SARS-COV-2)"
        />
        <meta
          name="twitter:image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />
      </Helmet>
      <ChartSection>
        <HorizontalBar
          data={DeathsByProvince}
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
                fontColor: "hsla(0, 100%, 67%, 1)",
              },
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
      <Helmet>
        <title>Casos por municipio | Monitor COVID-19</title>
        <meta
          name="description"
          content="Distribución de casos confirmados por municipio en Sonora de Coronavirus (COVID-19/SARS-COV-2)"
        />

        <meta
          itemprop="name"
          content="Casos por municipio | Monitor COVID-19"
        />
        <meta
          itemprop="description"
          content="Distribución de casos confirmados por municipio en Sonora de Coronavirus (COVID-19/SARS-COV-2)"
        />
        <meta
          itemprop="image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta
          property="og:url"
          content="https://monitorsonora.com/contagios-municipio"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Casos por municipio | Monitor COVID-19"
        />
        <meta
          property="og:description"
          content="Distribución de casos confirmados por municipio en Sonora de Coronavirus (COVID-19/SARS-COV-2)"
        />
        <meta
          property="og:image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Casos por municipio | Monitor COVID-19"
        />
        <meta
          name="twitter:description"
          content="Distribución de casos confirmados por municipio en Sonora de Coronavirus (COVID-19/SARS-COV-2)"
        />
        <meta
          name="twitter:image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />
      </Helmet>
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
  labels: chartsData.proporcionLabels,
  datasets: [
    {
      data: chartsData.proporcionData,
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
    <>
      <Helmet>
        <title>Distribución de casos | Monitor COVID-19</title>
        <meta
          name="description"
          content="Distribución de casos recuperados, decesos, pacientes hospitalizados y pacientes con recuperación en casa de Coronavirus "
        />

        <meta
          itemprop="name"
          content="Distribución de casos | Monitor COVID-19"
        />
        <meta
          itemprop="description"
          content="Distribución de casos recuperados, decesos, pacientes hospitalizados y pacientes con recuperación en casa de Coronavirus "
        />
        <meta
          itemprop="image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta property="og:url" content="https://monitorsonora.com/detalles" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Distribución de casos | Monitor COVID-19"
        />
        <meta
          property="og:description"
          content="Distribución de casos recuperados, decesos, pacientes hospitalizados y pacientes con recuperación en casa de Coronavirus "
        />
        <meta
          property="og:image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Distribución de casos | Monitor COVID-19"
        />
        <meta
          name="twitter:description"
          content="Distribución de casos recuperados, decesos, pacientes hospitalizados y pacientes con recuperación en casa de Coronavirus "
        />
        <meta
          name="twitter:image"
          content="http://monitorsonora.com/covid19-sonora.jpg"
        />
      </Helmet>
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
    </>
  );
}
