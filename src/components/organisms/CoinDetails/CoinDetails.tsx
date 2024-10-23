import { Badge } from "@/components/atoms";
import {
  SizeVariants,
  StatBlock,
  ValueChangeDisplay,
} from "@/components/molecules";
import { useCoinDetails } from "@/hooks";
import { parsePrice, usdFormat } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export const CoinDetails = ({ coin }: { coin: string }) => {
  const { data, isFetching, isError } = useCoinDetails(coin);

  console.log(data);

  const coinStats = useMemo(() => {
    return [
      {
        key: "Market Cap",
        value: usdFormat(data?.market_data.market_cap.usd),
      },
      {
        key: "Fully Diluted Market Cap",
        value: usdFormat(data?.market_data.fully_diluted_valuation.usd),
      },
      {
        key: "Total Volume",
        value: usdFormat(data?.market_data.total_volume.usd),
      },
      {
        key: "Total Supply",
        value: Math.floor(data?.market_data.total_supply).toLocaleString(),
      },
      {
        key: "24h Change",
        value: data?.market_data.price_change_percentage_24h,
      },
      {
        key: "24h High",
        value: parsePrice(data?.market_data.high_24h?.usd),
      },
      {
        key: "24h Low",
        value: parsePrice(data?.market_data.low_24h?.usd),
      },
    ];
  }, [data]);

  if (isError) {
    return (
      <div className="container px-5">
        <h2 className="font-bold text-2xl">
          Uh oh... I think we&apos;re lost. The page you&apos;re looking for
          could not be found.
          <Link href="/">Take me home</Link>
        </h2>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3 container px-5 mx-auto min-h-screen">
      {!data && isFetching ? (
        <div>Loading skeleton...</div>
      ) : (
        <>
          <section className="pb-8 flex flex-col gap-3">
            {data?.categories.length && (
              <ul className="flex gap-2 flex-wrap">
                {data?.categories
                  .slice(0, 4)
                  .map((category: string, idx: number) => (
                    <Badge title={category} key={idx} />
                  ))}
              </ul>
            )}
            <div>
              <h2 className="capitalize font-semibold text-lg flex items-center gap-1.5">
                <Image
                  src={data?.image?.large}
                  alt={data?.name}
                  width={24}
                  height={24}
                />
                {coin}
                <span className="text-sm text-neutral-100 font-medium relative top-[1px]">
                  <span className="uppercase">{data?.symbol}</span> Price
                </span>
              </h2>
              <div className="flex items-center gap-2">
                <h3 className="text-4xl font-bold">
                  {parsePrice(data?.market_data?.current_price.usd)}
                </h3>
                <ValueChangeDisplay
                  change={data?.market_data?.price_change_24h}
                  size={SizeVariants.lg}
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-12 pt-8 border-t border-neutral-50/10">
            <h4 className="text-base font-semibold">Market Info</h4>
            <ul className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
              {coinStats.map((stat) => (
                <div key={stat.key} className="col-span-1">
                  <StatBlock title={stat.key} value={stat.value} />
                </div>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
};
