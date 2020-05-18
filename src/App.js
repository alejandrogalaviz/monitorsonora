import React from "react";
import { Router } from "@reach/router";
import MapChart from "../src/components/MapChart";
import {
  ConfirmedChart,
  AccumulatedChart,
  ConfirmedByProvinceChart,
  DetailsChart,
} from "../src/components/Charts";
import { GlobalStyle } from "../src/components/GlobalStyle";
import DataPanel from "../src/components/DataPanel";
import Noticias from "../src/components/Noticias";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <DataPanel />
        <section>
          <Router>
            <MapChart path="/" />
            <ConfirmedChart path="/contagios" />
            <ConfirmedByProvinceChart path="/contagios-municipio" />
            <AccumulatedChart path="/casos-totales" />
            <DetailsChart path="/detalles" />
            {/* <Noticias path="/noticias" /> */}
          </Router>
        </section>
      </main>
    </>
  );
}
