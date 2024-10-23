import { Dashboard } from "@/components/organisms";
import { baseApiUrl } from "@/constants";
import { Coin } from "@/types";
import localFont from "next/font/local";

// 1) Cryptocurrency name
// 2) Current price in USD
// 3) Percentage change in price over the last 24 hours

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function getServerSideProps() {
  const res = await fetch(
    `${baseApiUrl}/simple/price?ids=bitcoin,ethereum,dogecoin,cardano,solana&vs_currencies=usd&include_24hr_change=true`
  );

  try {
    const coins = await res.json();
    return { props: { coins } };
  } catch (error) {
    return { error };
  }
}

export default function DashboardPage({ coins }: { coins: Coin[] }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} pt-8 min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <Dashboard coins={coins} />
    </div>
  );
}
