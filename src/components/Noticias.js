import React, { Component } from "react";

class Noticias extends Component {
  render() {
    return (
      <div className="cards-container">
        <div className="card">
          <div className="card-img-cont">
            <a href="#">
              <img
                src="https://via.placeholder.com/100"
                alt=""
                className="card-img"
              />
            </a>
          </div>
          <div className="card-content">
            <h3 className="card-title">
              <a href="#">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reicien...
              </a>
            </h3>
            <p className="card-source">
              <span>CNN</span> - Hace 4 horas
            </p>
            <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consectetur debitis dolor sunt harum quo cumque alias ut. Corrupti
              fu ...
            </p>
          </div>
        </div>
        <div className="card">
          <a href="#">
            <img
              src="https://via.placeholder.com/100"
              alt=""
              className="card-img"
            />
          </a>
        </div>
        <div className="card">
          <a href="#">
            <img
              src="https://via.placeholder.com/100"
              alt=""
              className="card-img"
            />
          </a>
        </div>
        <div className="card">
          <a href="#">
            <img
              src="https://via.placeholder.com/100"
              alt=""
              className="card-img"
            />
          </a>
        </div>
      </div>
    );
  }
}
export default Noticias;
