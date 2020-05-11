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
];
const proporcionLabels = [
  "Recuperados 13.435%",
  "Estables/Domicilio - 70.238%",
  "Estables/Hospital - 3.231%",
  "Graves/Hospital - 4.762%",
  "Fallecidos - 8.333%",
];
const proporcionData = [79, 413, 18, 28, 49];
const chartsData = {
  recuperados,
  decesos,
  confirmadosTotal,
  confirmadosDiario,
  proporcionLabels,
  proporcionData,
};
export default chartsData;
