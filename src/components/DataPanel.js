import React from "react";
import Stats from "../components/Stats";
import Sonora from "../components/Sonora";
import Heading from "../components/Heading";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function DataPanel() {
  return (
    <section>
      <Heading />
      <Nav />
      <div>
        <h2>
          Sonora{" "}
          <span role="img" aria-label="Mexico Flag">
            MX
          </span>
        </h2>
        <Sonora />
      </div>
      <div>
        <h2>Mundo</h2>
        <Stats url="https://covid19.mathdro.id/api/" />
      </div>
      <hr />
      <Footer />
    </section>
  );
}
