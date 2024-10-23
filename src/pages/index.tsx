import { Dashboard } from "@/components/organisms";
import { baseApiUrl } from "@/constants";
import { Page } from "@/templates";
import { Coin } from "@/types";

export async function getServerSideProps() {
  const res = await fetch(
    `${baseApiUrl}/simple/price?ids=${process.env.NEXT_PUBLIC_SUPPORTED_CURRENCIES}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`
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
    <Page>
      <Dashboard coins={coins} />
    </Page>
  );
}
