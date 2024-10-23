import { coinGeckoUrl } from "@/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full px-5 py-4">
      <Link
        href={coinGeckoUrl}
        className="text-xs underline text-neutral-100"
        target="_blank"
      >
        Data provided by CoinGecko
      </Link>
    </footer>
  );
};
