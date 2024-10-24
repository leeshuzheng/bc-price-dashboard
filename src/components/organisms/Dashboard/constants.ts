export const columns = [
  {
    key: "coin",
    label: "Coin",
    width: "18%",
  },
  {
    key: "usd",
    label: "Price",
    width: "8%",
    className: "text-right pr-5 md:pr-12",
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
  wrapper: "p-0 bg-transparent shadow-none rounded-none",
  th: "border-b border-neutral-50/5 bg-background",
  td: "border-b border-neutral-50/5 py-3 text-xs lg:text-sm",
  thead: "rounded-none",
  base: "lg:h-[500px] overflow-auto",
  table: "",
};
