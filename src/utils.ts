import BigNumber from "bignumber.js";

export const usdFormat = (
  number: number | bigint,
  digits = 0,
  notation: "standard" | "compact" = "standard"
) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencySign: "accounting",
    maximumFractionDigits: digits,
    notation: notation,
  }).format(number);
};
export const parsePrice = (price: number) => {
  const priceInUsd = new BigNumber(price);
  const decimalPlaces = priceInUsd.lt(1) ? 4 : 2;
  return usdFormat(price, decimalPlaces);
};

export const percentFormat = (
  number: number,
  dividedBy = 100,
  minimumFractionDigits = 0,
  maximumFractionDigits = 2
) => {
  const value = dividedBy === 0 ? 0 : number / dividedBy;
  return Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);
};
