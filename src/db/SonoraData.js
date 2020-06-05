const data = [
  {
    id: 0,
    name: "Hermosillo",
    capital: "Hermosillo",
    confirmed: 984,
    deaths: 11,
    compromised: 0,
    status: "alert",
    coord: {
      lat: 29.07,
      lng: -110.95,
    },
  },
  {
    id: 1,
    name: "Guaymas",
    capital: "Guaymas",
    confirmed: 75,
    deaths: 5,
    compromised: 0,
    status: "caution",
    coord: {
      lat: 27.9179,
      lng: -110.9089,
    },
  },
  {
    id: 2,
    name: "Navojoa",
    capital: "Navojoa",
    confirmed: 147,
    deaths: 5,
    compromised: 0,
    status: "caution",
    coord: {
      lat: 27.0728,
      lng: -109.4437,
    },
  },
  {
    id: 3,
    name: "Cajeme",
    capital: "Cajeme",
    confirmed: 559,
    deaths: 18,
    compromised: 0,
    status: "warning",
    coord: {
      lat: 27.4828,
      lng: -109.9304,
    },
  },
  {
    id: 4,
    name: "Nogales",
    capital: "Nogales",
    confirmed: 450,
    deaths: 12,
    compromised: 0,
    status: "warning",
    coord: {
      lat: 31.3012,
      lng: -110.9381,
    },
  },
  {
    id: 5,
    name: "San Luis Rio Colorado",
    capital: "San Luis Rio Colorado",
    confirmed: 469,
    deaths: 32,
    compromised: 0,
    status: "alert",
    coord: {
      lat: 32.4519,
      lng: -114.7717,
    },
  },
  {
    id: 6,
    name: "Caborca",
    capital: "Caborca",
    confirmed: 84,
    deaths: 7,
    compromised: 0,
    status: "caution",
    coord: {
      lat: 30.7145,
      lng: -112.1616,
    },
  },
  {
    id: 7,
    name: "Agua Prieta",
    capital: "Agua Prieta",
    confirmed: 50,
    deaths: 2,
    compromised: 0,
    status: null,
    coord: {
      lat: 31.3278,
      lng: -109.549,
    },
  },
  {
    id: 8,
    name: "Huatabampo",
    capital: "Huatabampo",
    confirmed: 30,
    deaths: 4,
    compromised: 0,
    status: null,
    coord: {
      lat: 26.8271,
      lng: -109.6419,
    },
  },
  {
    id: 9,
    name: "Etchojoa",
    capital: "Etchojoa",
    confirmed: 14,
    deaths: 2,
    compromised: 0,
    status: null,
    coord: {
      lat: 26.9111,
      lng: -109.6266,
    },
  },
  {
    id: 10,
    name: "Puerto Peñasco",
    capital: "Puerto Peñasco",
    confirmed: 7,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 31.3268,
      lng: -113.5312,
    },
  },
  {
    id: 11,
    name: "Empalme",
    capital: "Empalme",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 27.9665,
      lng: -110.8136,
    },
  },
  {
    id: 12,
    name: "Cananea",
    capital: "Cananea",
    confirmed: 29,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.9898,
      lng: -110.2892,
    },
  },
  {
    id: 13,
    name: "Magdalena",
    capital: "Magdalena",
    confirmed: 29,
    deaths: 3,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.6249,
      lng: -110.9714,
    },
  },
  {
    id: 14,
    name: "Tubutama",
    capital: "Tubatama",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.866667,
      lng: -111.45,
    },
  },
  {
    id: 15,
    name: "Bácum",
    capital: "Bácum",
    confirmed: 7,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 27.5505,
      lng: -110.0822,
    },
  },
  {
    id: 16,
    name: "Sáric",
    capital: "Sáric",
    confirmed: 4,
    deaths: 2,
    compromised: 0,
    status: null,
    coord: {
      lat: 31.104,
      lng: -111.3788,
    },
  },
  {
    id: 17,
    name: "Opodepe",
    capital: "Opodepe",
    confirmed: 2,
    deaths: 1,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.9262,
      lng: -110.6269,
    },
  },
  {
    id: 18,
    name: "GPEC",
    capital: "GPEC",
    confirmed: 11,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 31.8647,
      lng: -112.852,
    },
  },
  {
    id: 19,
    name: "Imuris",
    capital: "Imuris",
    confirmed: 1,
    deaths: 1,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.7895,
      lng: -110.8449,
    },
  },
  {
    id: 20,
    name: "Villa Pesqueira",
    capital: "Villa Pesqueira",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.1179,
      lng: -109.9671,
    },
  },
  {
    id: 21,
    name: "Cumpas",
    capital: "Cumpas",
    confirmed: 1,
    deaths: 1,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.9947,
      lng: -109.7803,
    },
  },
  {
    id: 23,
    name: "Santa Ana",
    capital: "Santa Ana",
    confirmed: 15,
    deaths: 1,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.5406,
      lng: -111.1205,
    },
  },
  {
    id: 24,
    name: "Altar",
    capital: "Altar",
    confirmed: 11,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.71626,
      lng: -111.83653,
    },
  },
  {
    id: 25,
    name: "Nacozari de G.",
    capital: "Nacozari de G.",
    confirmed: 24,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.3753,
      lng: -109.6875,
    },
  },
  {
    id: 26,
    name: "Ures",
    capital: "Ures",
    confirmed: 5,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.426,
      lng: -110.386,
    },
  },
  {
    id: 27,
    name: "Benito Juárez",
    capital: "Benito Juárez",
    confirmed: 10,
    deaths: 1,
    compromised: 0,
    status: null,
    coord: {
      lat: 27.417,
      lng: -110.017,
    },
  },
  {
    id: 28,
    name: "Rosario Tesopaco",
    capital: "Rosario Tesopaco",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 27.841111,
      lng: -109.368056,
    },
  },
  {
    id: 29,
    name: "Álamos",
    capital: "Álamos",
    confirmed: 4,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 27.0275,
      lng: -108.94,
    },
  },
  {
    id: 30,
    name: "Pitiquito",
    capital: "Pitiquito",
    confirmed: 3,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.677111,
      lng: -112.054892,
    },
  },
  {
    id: 31,
    name: "Ónavas",
    capital: "Ónavas",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 28.45,
      lng: -109.516667,
    },
  },
  {
    id: 32,
    name: "Baviácora",
    capital: "Baviácora",
    confirmed: 2,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.61848,
      lng: -110.14157,
    },
  },
  {
    id: 33,
    name: "Benjamín Hill",
    capital: "Benjamín Hill",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.61848,
      lng: -110.14157,
    },
  },
  {
    id: 34,
    name: "Carbó",
    capital: "Carbó",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.68967,
      lng: -110.956625,
    },
  },
  {
    id: 35,
    name: "Bavispe",
    capital: "Bavispe",
    confirmed: 3,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.480008,
      lng: -108.940498,
    },
  },
  {
    id: 36,
    name: "San Miguel de H.",
    capital: "San Miguel de H.",
    confirmed: 4,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.48737,
      lng: -110.72479,
    },
  },
  {
    id: 37,
    name: "Quiriego",
    capital: "Quiriego",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.140812,
      lng: -111.008211,
    },
  },
];

export default data;
