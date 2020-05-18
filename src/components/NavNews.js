import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Navigation = styled.nav`
  background-color: var(--color-black);
  margin: 0.5rem 0;
  padding: 0.1rem 0.3rem;
  border-radius: 2px;
  text-align: left;

  > a {
    display: inline-block;
    font-weight: bolder;
    padding: 0.2rem 0.3rem;
    font-size: 0.7rem;
    line-height: 1.4rem;
    text-transform: uppercase;
    margin-left: 0.2rem;
    text-decoration: none;
    background-color: transparent;
    transition: 280ms background-color ease-in-out;
    border-radius: 2px;

    :hover {
      background-color: var(--color-secondary);
      color: var(--color-background);
      transition: 280ms background-color ease-in-out;
    }
    :active {
      transform: scale(0.9);
      transition: 280ms background-color ease-in-out;
    }
  }

  @media (max-width: 960px) {
    text-align: center;
  }

  .active {
    background-color: var(--color-primary);
    color: var(--color-background);
    transition: 280ms background-color ease-in-out;
  }
`;

export default class Nav extends Component {
  render() {
    return (
      <Navigation>
        <Link to="/">Mapa</Link>
        <Link to="/contagios-municipio">Municipios</Link>
        <Link to="/contagios">Diario</Link>
        <Link to="/casos-totales">Total</Link>
        <Link to="/detalles">Detalle</Link>
        <Link to="/noticias" className="active">
          Noticias
        </Link>
        {/* <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://noticias.monitorsonora.com/"
      >
        Noticias
      </a> */}
      </Navigation>
    );
  }
}
