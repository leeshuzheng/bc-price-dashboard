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
import Link from "next/link";
import { Key, useCallback } from "react";
import { columns, tableClassNames } from "./constants";

export const Dashboard = ({ coins }: { coins: Coin[] }) => {
  const coinsArr = Object.entries(coins).map((item) => ({
    coin: item[0],
    usd: item[1].usd,
    usd_24h_change: item[1].usd_24h_change,
    usd_24h_vol: item[1].usd_24h_vol,
    usd_market_cap: item[1].usd_market_cap,
  }));
  // sanitise $ with decimal points

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCell = useCallback((item: any, key: Key) => {
    switch (key) {
      case "coin":
        return <Link href={`/coins/${item.coin}`}>{item.coin}</Link>;
      case "usd":
        return parsePrice(item.usd);
      case "usd_24h_change":
        return <ValueChangeDisplay change={item.usd_24h_change} />;
      case "usd_24h_vol":
      case "usd_market_cap":
        return usdFormat(item[key as string]);
      default:
        return item[key as string] as React.ReactNode;
    }
  }, []);

  return (
    <div className="container mx-auto flex flex-col gap-5 px-5">
      <h2 className="text-lg lg:text-2xl font-semibold">
        Cryptocurrency Prices by Market Cap
      </h2>
      <Table aria-label="Cryptocurrency Prices" classNames={tableClassNames}>
        <TableHeader columns={columns}>
          {(column) => (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <TableColumn key={column.key} width={column.width as any}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={coinsArr}>
          {(item) => (
            <TableRow key={item.coin} className="cursor-pointer">
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
