import React from "react";
import data from "../db/SonoraData";
import { StatGrid, StatBlock, TwoCols, Row, Separator } from "./StyledStats";

export default function Sonora() {
  const provinces = data;
  const sortedProvinces = provinces.sort((a, b) => {
    return b.confirmed - a.confirmed;
  });

  const dataTotals = {
    confirmed: 451,
    deaths: 44,
    // suspicious: 67,
    negatives: 1174,
    recoveries: 61,
    tests: 1625,
  };

  var result = (dataTotals.confirmed / dataTotals.tests) * 100;
  var mortality = (dataTotals.deaths / dataTotals.confirmed) * 100;
  var active = dataTotals.confirmed - dataTotals.deaths - dataTotals.recoveries;

  return (
    <>
      <p>
        <small>
          Última actualización: 06.05 | 09:20pm | Fuente:{" "}
          <a href="https://www.gob.mx/salud/">SECRETARÍA DE SALUD DE MÉXICO</a>
        </small>
      </p>
      <StatGrid>
        <StatBlock className="warning">
          <p style={{ fontSize: "initial" }}>+59</p>
          <p>{dataTotals.confirmed}</p>
          <h3>Confirmados</h3>
        </StatBlock>
        <StatBlock style={{ color: "#fffc57" }}>
          <p style={{ fontSize: "initial" }}>+56</p>
          <p>{active}</p>
          <h3>Activos</h3>
        </StatBlock>
        <StatBlock className="danger">
          <p style={{ fontSize: "initial" }}>+3</p>

          <p>{dataTotals.deaths}</p>
          <h3>Decesos</h3>
        </StatBlock>

        <StatBlock>
          <p style={{ fontSize: "initial" }}>+0</p>

          <p>{dataTotals.recoveries}</p>
          <h3>Recuperados</h3>
        </StatBlock>
        <StatBlock>
          <p style={{ fontSize: "initial" }}>+72</p>

          <p>{dataTotals.tests}</p>
          <h3>Pruebas</h3>
        </StatBlock>
        <StatBlock>
          <p style={{ fontSize: "initial" }}>+13</p>

          <p>{dataTotals.negatives}</p>
          <h3>Descartados</h3>
        </StatBlock>
        <StatBlock>
          <p style={{ fontSize: "initial" }}>+2.5085%</p>

          <p>{result.toFixed(2)}% </p>
          <h3>Positivos/Pruebas</h3>
        </StatBlock>
        <StatBlock className="danger">
          <p style={{ fontSize: "initial" }}>-0.7030%</p>

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
