export const formatNumber = (value) => {
  let currency = "";
  let angkarev = value.toString().split("").reverse().join("");
  for (let i = 0; i < angkarev.length; i++)
    if (i % 3 === 0) currency += angkarev.substr(i, 3) + ".";
  return currency
    .split("", currency.length - 1)
    .reverse()
    .join("");
};
