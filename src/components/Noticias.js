import React, { Component } from "react";
import Nav from "./NavNews";
import Footer from "./Footer";
import { Link } from "@reach/router";
import Share from "./Share";

class Noticias extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    this.props.openNews();
    fetch(
      "https://noticias.monitorsonora.com/index.php?module=blog&json=entries"
    )
      .then((response) => response.json())
      .then((news) => this.setState({ news: news }));
  }
  componentWillUnmount() {
    this.props.closeNews();
  }

  render() {
    return (
      <div className="cards-container">
        <h1 className="news-heading">Noticias COVID-19/SARS-CoV-2</h1>
        <Link to="/">
          <img className="hide-desktop news-logo" src="favicon.png" alt="" />
        </Link>
        <div className="hide-desktop">
          <Nav />
        </div>
        <div className="card">
          <div className="card-img-cont">
            <a href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nd6DZLOJ2RirhLLCKhlM9moJr072MFzsBlmn_wquAWXYaBh_reYpxvDRQzM0wp3UG4rOGUdA&s"
                alt=""
                className="card-img"
              />
            </a>
          </div>
          <div className="card-content">
            <h3>
              <a className="card-title" href="#">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reicien...
              </a>
            </h3>
            <p className="card-source">
              <span className="caution">CNN</span> - Hace 4 horas
            </p>
            <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consectetur debitis dolor sunt harum quo cumque alias ut. Corrupti
              fu ...
            </p>
            <Share />
          </div>
        </div>
        <div className="hide-desktop">
          <Footer />
        </div>
      </div>
    );
  }
}
export default Noticias;
