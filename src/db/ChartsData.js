const recuperados = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  2,
  2,
  2,
  2,
  2,
  2,
  4,
  4,
  4,
  5,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  7,
  7,
  11,
  12,
  12,
  13,
  13,
  17,
  35,
  37,
  41,
  42,
  43,
  44,
  48,
  60,
  61,
  61,
  61,
  61,
  62,
  73,
  77,
  79,
  79,
  91,
  92,
  92,
  106,
  113,
  128,
  138,
  138,
  146,
  149,
  163,
  163,
  163,
  163,
  195,
  232,
  299,
  299,
  324,
  334,
  334,
  334,
  334,
  348,
  359,
  365,
  377,
  379,
  386,
  401,
  430,
  430,
  486,
  512,
  512,
  529,
  553,
  580,
  605,
  647,
  649,
  649,
  692,
  707,
];
const decesos = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  1,
  1,
  4,
  5,
  5,
  8,
  8,
  8,
  12,
  12,
  12,
  12,
  14,
  14,
  16,
  16,
  17,
  17,
  22,
  22,
  24,
  26,
  26,
  30,
  31,
  34,
  34,
  35,
  35,
  37,
  41,
  41,
  44,
  45,
  45,
  47,
  49,
  53,
  55,
  58,
  62,
  66,
  68,
  73,
  79,
  86,
  89,
  95,
  97,
  109,
  123,
  129,
  139,
  156,
  167,
  173,
  177,
  193,
  204,
  224,
  241,
  255,
  269,
  274,
  278,
  291,
  309,
  331,
  357,
  381,
  393,
  417,
  432,
  465,
  486,
  509,
  550,
  569,
  582,
  621,
  674,
  721,
];
const confirmadosTotal = [
  0,
  1,
  1,
  2,
  2,
  2,
  3,
  4,
  4,
  5,
  8,
  8,
  10,
  14,
  17,
  17,
  18,
  21,
  22,
  28,
  29,
  33,
  36,
  39,
  48,
  55,
  69,
  83,
  86,
  88,
  97,
  109,
  117,
  124,
  133,
  152,
  157,
  165,
  181,
  199,
  214,
  224,
  245,
  260,
  267,
  288,
  305,
  320,
  335,
  364,
  392,
  392,
  451,
  485,
  534,
  550,
  588,
  642,
  686,
  744,
  790,
  856,
  905,
  981,
  1037,
  1110,
  1189,
  1274,
  1410,
  1501,
  1599,
  1701,
  1809,
  1928,
  2032,
  2154,
  2284,
  2386,
  2561,
  2704,
  2818,
  3042,
  3213,
  3333,
  3494,
  3650,
  3794,
  4011,
  4275,
  4553,
  4776,
  4963,
  5062,
  5241,
  5511,
  5739,
  6173,
  6448,
  6709,
  6894,
  7306,
  7547,
];
const confirmadosDiario = [
  0,
  1,
  0,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  3,
  0,
  2,
  4,
  3,
  0,
  1,
  3,
  1,
  6,
  1,
  4,
  3,
  3,
  9,
  7,
  14,
  14,
  3,
  2,
  9,
  12,
  8,
  7,
  9,
  19,
  5,
  8,
  16,
  18,
  15,
  10,
  21,
  15,
  7,
  21,
  17,
  15,
  15,
  29,
  28,
  0,
  59,
  34,
  49,
  16,
  38,
  54,
  44,
  58,
  46,
  66,
  49,
  76,
  56,
  77,
  79,
  85,
  136,
  91,
  98,
  102,
  108,
  119,
  104,
  122,
  130,
  102,
  175,
  143,
  113,
  225,
  171,
  120,
  161,
  156,
  144,
  217,
  264,
  278,
  223,
  187,
  99,
  179,
  270,
  228,
  434,
  275,
  261,
  185,
  412,
  241,
];
const proporcionLabels = [
  "Recuperados 9.368%",
  "Estables/Domicilio - 71.101%",
  "Estables/Hospital - 2.465%",
  "Graves/Hospital - 7.513%",
  "Fallecidos - 9.553%",
];
const proporcionData = [707, 5366, 186, 567, 721];
const chartsData = {
  recuperados,
  decesos,
  confirmadosTotal,
  confirmadosDiario,
  proporcionLabels,
  proporcionData,
};
export default chartsData;
