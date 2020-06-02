import React, { Component } from "react";
import { Router } from "@reach/router";
import { MapChart } from "./components/MapChart";
import {
  ConfirmedChart,
  AccumulatedChart,
  ConfirmedByProvinceChart,
  DetailsChart,
} from "./components/Charts";
// import { DemoChart2 } from "./components/DemoCharts";
import { GlobalStyle } from "./components/GlobalStyle";
import DataPanel from "./components/DataPanel";
import Noticias from "./components/Noticias";
import classnames from "classnames";

export default class App_test extends Component {
  constructor() {
    super();
    this.state = {
      isNews: false,
    };
    this.openNews = this.openNews.bind(this);
    this.closeNews = this.closeNews.bind(this);
  }

  openNews = () => {
    this.setState({
      isNews: true,
    });
  };

  closeNews = () => {
    this.setState({
      isNews: false,
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <main>
          <DataPanel isNews={this.state.isNews} />
          <section
            className={classnames({ newsSection: this.state.isNews === true })}
          >
            <Router>
              <MapChart path="/" />
              <ConfirmedChart path="/contagios" />
              <ConfirmedByProvinceChart path="/contagios-municipio" />
              <AccumulatedChart path="/casos-totales" />
              <DetailsChart path="/detalles" />
              <Noticias
                openNews={this.openNews}
                closeNews={this.closeNews}
                path="/noticias"
              />
              {/* <DemoChart2 path="/demo" /> */}
            </Router>
          </section>
        </main>
      </>
    );
  }
}
