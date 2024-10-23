export const columns = [
  {
    key: "coin",
    label: "Coin",
    width: "23%",
  },
  {
    key: "usd",
    label: "Price",
    width: "15%",
  },
  {
    key: "usd_24h_change",
    label: "24h Change",
    width: "20%",
  },
  {
    key: "usd_24h_vol",
    label: "24h Volume",
    width: "22%",
  },
  {
    key: "usd_market_cap",
    label: "Market Cap",
    width: "20%",
  },
];

export const tableClassNames = {
  wrapper: "p-0 bg-transparent shadow-none",
  th: "bg-transparent",
  td: "border-b border-neutral-50/5 py-4 text-xs lg:text-sm",
  tr: "hover:bg-neutral-50/10",
  thead: "rounded-none",
  base: "lg:h-[500px] overflow-auto",
  table: "",
};
