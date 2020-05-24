import React, { Component } from "react";
import Nav from "./NavNews";
import Footer from "./Footer";
import { Link } from "@reach/router";
import { Helmet } from "react-helmet";
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
      "https://noticias.monitorsonora.com/index.php?module=blog&json=entries&l1=1&l2=20"
    )
      .then((response) => response.json())
      .then((news) => this.setState({ news: news }));
  }
  componentWillUnmount() {
    this.props.closeNews();
  }

  render() {
    let noticias = this.state.news.map((noticia, i) => {
      return (
        <div className="card" key={i}>
          <div className="card-img-cont">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={noticia.a_type.id}
            >
              <img src={noticia.image} alt="" className="card-img" />
            </a>
          </div>
          <div className="card-content">
            <h3>
              <a
                className="card-title"
                target="_blank"
                rel="noopener noreferrer"
                href={noticia.a_type.id}
              >
                {noticia.title}
              </a>
            </h3>
            <p className="card-source">
              <span className="caution">{noticia.a_type.domain}</span> -{" "}
              {noticia.date}
            </p>
            <p className="card-description">{noticia.description}</p>
            <Share title={noticia.title} url={noticia.a_type.id} />
          </div>
        </div>
      );
    });
    return (
      <>
        <Helmet>
          <title>Noticias | Monitor COVID-19 </title>
          <meta
            name="description"
            content="Las noticias más relevantes e importantes para Sonora, México y el mundo acerca de la situación de COVID-19 las encontrarás aquí."
          />

          <meta itemprop="name" content="Noticias | Monitor COVID-19 " />
          <meta
            itemprop="description"
            content="Las noticias más relevantes e importantes para Sonora, México y el mundo acerca de la situación de COVID-19 las encontrarás aquí."
          />
          <meta
            itemprop="image"
            content="http://monitorsonora.com/covid19-sonora.jpg"
          />

          <meta
            property="og:url"
            content="https://monitorsonora.com/noticias"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Noticias | Monitor COVID-19 " />
          <meta
            property="og:description"
            content="Las noticias más relevantes e importantes para Sonora, México y el mundo acerca de la situación de COVID-19 las encontrarás aquí."
          />
          <meta
            property="og:image"
            content="http://monitorsonora.com/covid19-sonora.jpg"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Noticias | Monitor COVID-19 " />
          <meta
            name="twitter:description"
            content="Las noticias más relevantes e importantes para Sonora, México y el mundo acerca de la situación de COVID-19 las encontrarás aquí."
          />
          <meta
            name="twitter:image"
            content="http://monitorsonora.com/covid19-sonora.jpg"
          />
        </Helmet>
        <div className="cards-container">
          <h1 className="news-heading">Noticias COVID-19/SARS-CoV-2</h1>
          <Link to="/">
            <img className="hide-desktop news-logo" src="favicon.png" alt="" />
          </Link>
          <div className="hide-desktop">
            <Nav />
          </div>
          {noticias}
          <div className="hide-desktop">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
export default Noticias;
