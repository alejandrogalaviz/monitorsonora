import React from "react";

export default function Footer() {
  var today = new Date();
  var year = today.getFullYear();
  return (
    <footer>
      <a href="https://www.twitter.com/_juanmnl">&copy;{year} - juanmnl</a>{" "}
      <a href="https://github.com/alejandrogalaviz/">
        &copy;{year} - alejandrogalaviz
      </a>
      <br />
      <a href="https://github.com/alejandrogalaviz/covid19-monitor-sonora">
        ¿Me ayudas?
      </a>
    </footer>
  );
}
