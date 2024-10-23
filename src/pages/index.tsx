import { Dashboard, SimpleError } from "@/components/organisms";
import { baseApiUrl } from "@/constants";
import { Page } from "@/templates";
import { Coin } from "@/types";

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${baseApiUrl}/simple/price?ids=${process.env.NEXT_PUBLIC_SUPPORTED_CURRENCIES}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const coins = await res.json();
    return { props: { coins, error: null } };
  } catch (error) {
    return {
      props: {
        coins: null,
        error: error instanceof Error ? error.message : "Failed to fetch data",
      },
    };
  }
}

export default function DashboardPage({
  coins,
  error,
}: {
  coins: Coin[] | null;
  error: string | null;
}) {
  return (
    <Page>
      {error ? <SimpleError /> : <Dashboard coins={coins as Coin[]} />}
    </Page>
  );
}
