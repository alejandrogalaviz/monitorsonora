import React from "react";
import data from "../db/SonoraData";
import { StatGrid, StatBlock, TwoCols, Row, Separator } from "./StyledStats";

export default function Sonora() {
  const provinces = data;
  const sortedProvinces = provinces.sort((a, b) => {
    return b.confirmed - a.confirmed;
  });

  const dataTotals = {
    confirmed: 17,
    deaths: 0,
    surveillance: 160,
    suspicious: 142,
    // negatives: 1091,
    recoveries: 0
    // tests: 2780
  };

  var result = (dataTotals.confirmed / dataTotals.tests) * 100;

  return (
    <>
      <p>
        <small>
          Última actualización: 29.03 | 07:45pm | Fuente:{" "}
          <a href="https://www.gob.mx/salud/">SECRETARÍA DE SALUD DE MÉXICO</a>
        </small>
      </p>
      <StatGrid>
        <StatBlock className="warning">
          <p>{dataTotals.confirmed}</p>
          <h3>Confirmados</h3>
        </StatBlock>
        <StatBlock className="danger">
          <p>{dataTotals.deaths}</p>
          <h3>Decesos</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.surveillance}</p>
          <h3>Monitoreo</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.suspicious}</p>
          <h3>Sospecha</h3>
        </StatBlock>
        {/* <StatBlock>
          <p>{dataTotals.negatives}</p>
          <h3>Descartados</h3>
        </StatBlock> */}
        <StatBlock>
          <p>{dataTotals.recoveries}</p>
          <h3>Recuperados</h3>
        </StatBlock>
        {/* <StatBlock>
          <p>{dataTotals.tests}</p>
          <h3>Pruebas</h3>
        </StatBlock> */}
        {/* <StatBlock>
          <p>{result.toFixed(2)}% </p>
          <h3>Positivos : Pruebas</h3>
        </StatBlock> */}
      </StatGrid>
      <br />
      <h4>Municipio / Confirmados</h4>
      <br />
      <TwoCols>
        {sortedProvinces.map(province => (
          <Row key={province.id}>
            <span>{province.name}</span>
            <Separator />
            <span>{province.confirmed}</span>
          </Row>
        ))}
      </TwoCols>
    </>
  );
}
