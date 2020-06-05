import React from "react";
import data from "../db/SonoraData";
import { StatGrid, StatBlock, TwoCols, Row, Separator } from "./StyledStats";

export default function Sonora() {
  const provinces = data;
  const sortedProvinces = provinces.sort((a, b) => {
    return b.confirmed - a.confirmed;
  });

  const dataTotals = {
    confirmed: 3042,
    deaths: 255,
    negatives: 3035,
    recoveries: 348,
    tests: 6077,
  };

  var result = (dataTotals.confirmed / dataTotals.tests) * 100;
  var mortality = (dataTotals.deaths / dataTotals.confirmed) * 100;
  var active = dataTotals.confirmed - dataTotals.deaths - dataTotals.recoveries;

  return (
    <>
      <p>
        <small>
          Última actualización: 04.06 | 10:00pm | Fuente:{" "}
          <a href="http://saludsonora.gob.mx/">SECRETARÍA DE SALUD SONORA</a>
        </small>
      </p>
      <StatGrid>
        <StatBlock className="warning">
          <p className="font-small">+225</p>
          <p>{dataTotals.confirmed}</p>
          <h3>Confirmados</h3>
        </StatBlock>
        <StatBlock className="caution">
          <p className="font-small">+197</p>
          <p>{active}</p>
          <h3>Activos</h3>
        </StatBlock>
        <StatBlock className="danger">
          <p className="font-small">+14</p>
          <p>{dataTotals.deaths}</p>
          <h3>Decesos</h3>
        </StatBlock>
        <StatBlock>
          <p className="font-small">+14</p>
          <p>{dataTotals.recoveries}</p>
          <h3>Recuperados</h3>
        </StatBlock>
        <StatBlock>
          <p className="font-small">+227</p>
          <p>{dataTotals.tests}</p>
          <h3>Pruebas</h3>
        </StatBlock>
        <StatBlock>
          <p className="font-small">+2</p>
          <p>{dataTotals.negatives}</p>
          <h3>Descartados</h3>
        </StatBlock>
        <StatBlock>
          <p className="font-small">+1.89%</p>
          <p>{result.toFixed(2)}% </p>
          <h3>Positivos/Pruebas</h3>
        </StatBlock>
        <StatBlock className="danger">
          <p className="font-small">-0.17%</p>
          <p>{mortality.toFixed(2)}% </p>
          <h3>Tasa de Mortalidad</h3>
        </StatBlock>
      </StatGrid>
      <br />
      <h4>Municipio / Confirmados</h4>
      <br />
      <TwoCols>
        {sortedProvinces.map((province) => (
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
