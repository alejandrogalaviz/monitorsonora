import React from "react";
import { Map } from "./MapGL";
import { useWindowSize } from "../hooks/useWindowSize";
import { Helmet } from "react-helmet";

const SM_SCREEN_SIZE = 768;
const LG_SCREEN_SIZE = 1500;
const MONITOR_SM_SIZE = "small";
const MONITOR_MD_SIZE = "medium";
const MONITOR_LG_SIZE = "large";

const zooms = {
  [MONITOR_SM_SIZE]: 5.2,
  [MONITOR_MD_SIZE]: 5.8,
  [MONITOR_LG_SIZE]: 6.2,
};

const getSizeScreen = (width) => {
  if (width <= SM_SCREEN_SIZE) {
    return MONITOR_SM_SIZE;
  }

  if (width <= LG_SCREEN_SIZE && width > SM_SCREEN_SIZE) {
    return MONITOR_MD_SIZE;
  }

  return MONITOR_LG_SIZE;
};

export function MapChart() {
  const [width] = useWindowSize();
  const size = getSizeScreen(width);
  const isSmallSize = size === MONITOR_SM_SIZE;

  return (
    <>
      <Helmet>
        <title>Monitor COVID-19 | Sonora, MX</title>

        <meta
          name="description"
          content="Nuestro objetivo es informar a la ciudadanía acerca de los casos de Coronavirus (COVID-19/SARS-COV-2) en el Estado de Sonora."
        />

        <meta itemprop="name" content="Monitor COVID-19 | Sonora, MX" />
        <meta
          itemprop="description"
          content="Nuestro objetivo es informar a la ciudadanía acerca de los casos de Coronavirus (COVID-19/SARS-COV-2) en el Estado de Sonora."
        />
        <meta
          itemprop="image"
          content="https://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta property="og:url" content="http://monitorsonora.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Monitor COVID-19 | Sonora, MX" />
        <meta
          property="og:description"
          content="Nuestro objetivo es informar a la ciudadanía acerca de los casos de Coronavirus (COVID-19/SARS-COV-2) en el Estado de Sonora."
        />
        <meta
          property="og:image"
          content="https://monitorsonora.com/covid19-sonora.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monitor COVID-19 | Sonora, MX" />
        <meta
          name="twitter:description"
          content="Nuestro objetivo es informar a la ciudadanía acerca de los casos de Coronavirus (COVID-19/SARS-COV-2) en el Estado de Sonora."
        />
        <meta
          name="twitter:image"
          content="https://monitorsonora.com/covid19-sonora.jpg"
        />
      </Helmet>
      <Map
        lat={29.59}
        lng={-111.33}
        z={zooms[size]}
        isSmallSize={isSmallSize}
      />
    </>
  );
}
// export function MapDeathsChart() {
//   const [width] = useWindowSize();
//   const size = getSizeScreen(width);
//   const isSmallSize = size === MONITOR_SM_SIZE;

//   return (
//     <>
//       <MapDeaths
//         lat={29.59}
//         lng={-111.33}
//         z={zooms[size]}
//         isSmallSize={isSmallSize}
//       />
//     </>
//   );
// }
