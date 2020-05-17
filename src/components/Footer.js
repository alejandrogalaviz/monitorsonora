import React from "react";

export default function Footer() {
  var today = new Date();
  var year = today.getFullYear();
  return (
    <footer>
      <a href="https://www.twitter.com/_juanmnl">&copy;{year} - juanmnl y </a>
      {"   "}
      <a href="https://twitter.com/monitorsonoramx">monitorsonoramx </a>

      <br />
      <br />
      <a href="https://github.com/alejandrogalaviz/covid19-monitor-sonora">
        Código abierto
      </a>
      <a
        className="float-right"
        href="https://github.com/alejandrogalaviz/covid19-monitor-sonora"
      >
        Datos abiertos
      </a>
    </footer>
  );
}
