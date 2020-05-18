import React, { Component } from "react";
import Nav from "./NavNews";
import Footer from "./Footer";
import { Link } from "@reach/router";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

class Noticias extends Component {
  componentDidMount() {
    this.props.openNews();
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
            {/* <div className="share-button-3"></div> */}
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
            <div className="share-button-2"></div>
            <FacebookShareButton url={"https://monitorsonora.com"}>
              <FacebookIcon size={32} round={true}></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton url={"https://monitorsonora.com"}>
              <TwitterIcon size={32} round={true}></TwitterIcon>
            </TwitterShareButton>
            <WhatsappShareButton url={"https://monitorsonora.com"}>
              <WhatsappIcon size={32} round={true}></WhatsappIcon>
            </WhatsappShareButton>
          </div>
        </div>
        <div className="card">
          <div className="card-img-cont">
            <a href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ydhsXq7Sig5Ep1CzEoUb09bnVQ4qNqVrTV_icPJsEN3_5VJPE-C_A_aIqWKgO0Ni1ED52sg&s"
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
            <div className="share-button-2"></div>
          </div>
        </div>
        <div className="card">
          <div className="card-img-cont">
            <a href="#">
              <img
                src="data:image/jpeg;base64,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"
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
            <div className="share-button-2"></div>
          </div>
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
            <div className="share-button-2"></div>
          </div>
        </div>
        <div className="card">
          <div className="card-img-cont">
            <a href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ydhsXq7Sig5Ep1CzEoUb09bnVQ4qNqVrTV_icPJsEN3_5VJPE-C_A_aIqWKgO0Ni1ED52sg&s"
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
            <div className="share-button-2"></div>
          </div>
        </div>
        <div className="card">
          <div className="card-img-cont">
            <a href="#">
              <img
                src="data:image/jpeg;base64,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"
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
            <div className="share-button-2"></div>
          </div>
        </div>
        <div className="card">
          <div className="card-img-cont">
            <a href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ydhsXq7Sig5Ep1CzEoUb09bnVQ4qNqVrTV_icPJsEN3_5VJPE-C_A_aIqWKgO0Ni1ED52sg&s"
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
            <div className="share-button-2"></div>
          </div>
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
            <div className="share-button-2"></div>
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
