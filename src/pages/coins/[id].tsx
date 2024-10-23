import { useCoinDetails } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CoinsPage() {
  const router = useRouter();
  const coin = router.query.id;

  const { data, isFetching, isError } = useCoinDetails(coin as string);

  if (isError) {
    return (
      <div>
        Uh oh... I think we&apos;re lost. The page you&apos;re looking for could
        not be found.
        <Link href="/">Take me home</Link>
      </div>
    );
  }

  console.log("data", data);

  return (
    <section className="py-10">
      <div className="flex flex-col container px-5 mx-auto min-h-screen">
        {!data && isFetching ? (
          <div>Loading skeleton...</div>
        ) : (
          <>
            <h2 className="capitalize font-semibold text-3xl flex items-center gap-1.5">
              <Image
                src={data?.image?.large}
                alt={data?.name}
                width={28}
                height={28}
              />
              {coin}
            </h2>
            <span>${data?.market_data?.current_price.usd}</span>

            <span>24 High: {data?.market_data?.high_24h.usd}</span>
            <span>24 Low: {data?.market_data?.low_24h.usd}</span>
          </>
        )}
      </div>
    </section>
  );
}
