import { coinGeckoUrl } from "@/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-4">
      <div className="mx-auto container px-5">
        <Link
          href={coinGeckoUrl}
          className="text-xs underline text-neutral-100"
          target="_blank"
        >
          Data provided by CoinGecko
        </Link>
      </div>
    </footer>
  );
};
