import React from "react";

export default function Footer() {
  var today = new Date();
  var year = today.getFullYear();
  return (
    <footer>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.twitter.com/_juanmnl"
      >
        &copy;{year} - juanmnl y{" "}
      </a>
      {"   "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/monitorsonoramx"
      >
        monitorsonoramx{" "}
      </a>
      <a
        href="https://twitter.com/monitorsonoramx"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter-icon"
      >
        <img src="gorjeo.png" alt="" />
      </a>
      <a
        href="https://www.facebook.com/monitorsonora/"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook-icon"
      >
        <img src="facebook.png" alt="" />
      </a>

      <br />
      <br />
      <a href="https://github.com/alejandrogalaviz/covid19-monitor-sonora">
        Código abierto
      </a>
      {/* <a
        className="open-data"
        href="https://github.com/alejandrogalaviz/covid19-monitor-sonora"
      >
        Datos abiertos
      </a> */}
    </footer>
  );
}
