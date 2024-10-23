import { Coin } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/table";
import { useRouter } from "next/router";
import { columns } from "./constants";

export const Dashboard = ({ coins }: { coins: Coin[] }) => {
  const router = useRouter();
  const coinsArr = Object.entries(coins).map((item) => ({
    coin: item[0],
    usd: item[1].usd,
    usd_24h_change: item[1].usd_24h_change,
  }));

  return (
    <div className="container mx-auto">
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={coinsArr}>
          {(item) => (
            <TableRow
              key={item.coin}
              className="cursor-pointer"
              onClick={() => {
                router.push(`/coins/${item.coin}`);
              }}
            >
              {(columnKey) => (
                <TableCell className="capitalize">
                  {getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
