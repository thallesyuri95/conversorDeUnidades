const [mg, g, kg, ton] = ['miligramas', 'gramas', 'quilogramas', 'toneladas'];
const [cel, kel, fah] = ['celsius', 'kelvin', 'fahrenheit'];

const converterMassa = (uniInicial, uniFinal, valor) => {
  switch (uniInicial) {
    case mg:
      return {
        gramas: `${valor * 1000} ${uniFinal}`,
        quilogramas: `${valor * 100000} ${uniFinal}`,
        toneladas: `${valor * 1000000} ${uniFinal}`,
      }[uniFinal];
      break;
    case g:
      return {
        miligramas: `${valor * 1000} ${uniFinal}`,
        quilogramas: `${valor / 1000} ${uniFinal}`,
        toneladas: `${valor / 1000000} ${uniFinal}`,
      }[uniFinal];
      break;
    case kg:
      return {
        miligramas: `${valor * 1000000} ${uniFinal}`,
        gramas: `${valor * 1000} ${uniFinal}`,
        toneladas: `${valor / 1000} ${uniFinal}`,
      }[uniFinal];
      break;
    case ton:
      return {
        miligramas: `${valor / 100000000} ${uniFinal}`,
        gramas: `${valor / 1000000} ${uniFinal}`,
        quilogramas: `${valor / 1000} ${uniFinal}`,
      }[uniFinal];
      break;
  }
};

console.log(converterMassa(mg, ton, 5));

const converterTemperatura = (uniInicial, uniFinal, valor) => {
  switch (uniInicial) {
    case cel:
      return {
        kelvin: `${valor + 273.15} ${uniFinal}`,
        fahrenheit: `${valor * 1.8 + 32} ${uniFinal}`,
      }[uniFinal];
      break;
    case kel:
      return {
        celsius: `${valor - 273.15} ${uniFinal}`,
        fahrenheit: `${(valor - 273.15) * 1.8 + 32} ${uniFinal}`,
      }[uniFinal];
      break;
    case fah:
      return {
        celsius: `${valor - 32 / 1.8} ${uniFinal}`,
        kelvin: `${(valor - 32) * 1.8 + 273.15} ${uniFinal}`,
      }[uniFinal];
      break;
  }
};

console.log(converterTemperatura(fah, cel, 64));
