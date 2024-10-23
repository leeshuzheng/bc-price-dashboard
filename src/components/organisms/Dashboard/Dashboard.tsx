import { ValueChangeDisplay } from "@/components/molecules";
import { Coin } from "@/types";
import { parsePrice, usdFormat } from "@/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { ColumnSize } from "@react-types/table";
import Link from "next/link";
import { Key, useCallback } from "react";
import { columns, tableClassNames } from "./constants";
import { CoinData } from "./types";

export const Dashboard = ({ coins }: { coins: Coin[] }) => {
  const coinsArr: CoinData[] = Object.entries(coins).map((item) => ({
    coin: item[0],
    usd: item[1].usd,
    usd_24h_change: item[1].usd_24h_change,
    usd_24h_vol: item[1].usd_24h_vol,
    usd_market_cap: item[1].usd_market_cap,
  }));

  const renderCell = useCallback((item: CoinData, key: Key) => {
    switch (key) {
      case "coin":
        return <Link href={`/coins/${item.coin}`}>{item.coin}</Link>;
      case "usd":
        return (
          <p className="text-right pr-5 md:pr-12">{parsePrice(item.usd)}</p>
        );
      case "usd_24h_change":
        return <ValueChangeDisplay change={item.usd_24h_change} />;
      case "usd_24h_vol":
      case "usd_market_cap":
        return usdFormat(item.usd_market_cap);
      default:
        return item[key as keyof CoinData] as React.ReactNode;
    }
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg lg:text-2xl font-semibold">
        Cryptocurrency Prices by Market Cap
      </h2>
      <Table aria-label="Cryptocurrency Prices" classNames={tableClassNames}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key} width={column.width as ColumnSize}>
              <p className={column.className}>{column.label}</p>
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={coinsArr}>
          {(item) => (
            <TableRow
              key={item.coin}
              className="cursor-pointer hover:bg-neutral-50/10 transition-colors duration-100"
            >
              {(columnKey) => (
                <TableCell className="capitalize">
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
