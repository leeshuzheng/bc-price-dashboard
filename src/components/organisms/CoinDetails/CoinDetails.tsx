import { Badge } from "@/components/atoms";
import {
  SizeVariants,
  StatBlock,
  ValueChangeDisplay,
} from "@/components/molecules";
import { SimpleError } from "@/components/organisms";
import { useCoinDetails } from "@/hooks";
import { parsePrice, usdFormat } from "@/utils";
import clsx from "clsx";
import Image from "next/image";
import { useMemo } from "react";
import { LoadingSkeleton } from "./LoadingSkeleton";

export const CoinDetails = ({ coin }: { coin: string }) => {
  const { data, isFetching, isError } = useCoinDetails(coin);

  const coinStats = useMemo(() => {
    if (!data) return [];
    return [
      {
        key: "24h High",
        value: parsePrice(data?.market_data?.high_24h?.usd),
        className: "text-green",
      },
      {
        key: "24h Low",
        value: parsePrice(data?.market_data?.low_24h?.usd),
        className: "text-red",
      },
      {
        key: "Market Cap",
        value: usdFormat(data?.market_data?.market_cap.usd),
      },
      {
        key: "Fully Diluted Market Cap",
        value: usdFormat(data?.market_data?.fully_diluted_valuation.usd),
      },
      {
        key: "Total Volume",
        value: usdFormat(data?.market_data?.total_volume.usd),
      },
      {
        key: "Total Supply",
        value: Math.floor(data?.market_data?.total_supply).toLocaleString(),
      },
    ];
  }, [data]);

  if ((isError && !isFetching) || data?.error) {
    return <SimpleError />;
  }

  return (
    <div className="flex flex-col gap-3 mb-6">
      {!data || isFetching ? (
        <LoadingSkeleton />
      ) : (
        <>
          <section className="pb-4 md:pb-8 flex flex-col gap-3">
            {data?.categories?.length && (
              <ul className="flex gap-2 flex-wrap">
                {data?.categories
                  .slice(0, 5)
                  .map((category: string, idx: number) => (
                    <Badge title={category} key={idx} />
                  ))}
              </ul>
            )}
            <div className="flex flex-col gap-1.5">
              <h2 className="capitalize font-semibold text-lg flex items-center gap-1.5">
                {data?.image?.large && (
                  <Image
                    src={data?.image?.large}
                    alt={data?.name}
                    width={32}
                    height={32}
                  />
                )}
                {coin}
                <span className="text-sm text-neutral-100 font-medium relative top-[1px]">
                  <span className="uppercase">{data?.symbol}</span> Price
                </span>
              </h2>
              <div className="flex items-center gap-3">
                <h3 className="text-4xl font-bold">
                  {parsePrice(data?.market_data?.current_price.usd)}
                </h3>
                <ValueChangeDisplay
                  change={data?.market_data?.price_change_percentage_24h}
                  size={SizeVariants.lg}
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-6 lg:gap-12 pt-4 lg:pt-8 border-t border-neutral-50/10">
            <h4 className="text-base font-semibold">Market Info</h4>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
              {coinStats.map((stat) => (
                <li
                  key={stat.key}
                  className={clsx("col-span-1", stat.className)}
                >
                  <StatBlock title={stat.key} value={stat.value} />
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
};
