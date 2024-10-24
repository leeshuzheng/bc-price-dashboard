import { Dashboard, SimpleError } from "@/components/organisms";
import { baseApiUrl, supportedCurrencies } from "@/constants";
import { Page } from "@/templates";
import { Coin } from "@/types";

export async function getServerSideProps() {
  const url = `${baseApiUrl}/simple/price?ids=${supportedCurrencies}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      return { props: { coins: null, error: res.status } };
    }

    const coins = await res.json();
    return { props: { coins, error: null } };
  } catch (error) {
    console.error("Error:", error);

    return { props: { coins: null, error: 500 } }; // internal server error
  }
}
export default function DashboardPage({
  coins,
  error,
}: {
  coins: Coin[] | null;
  error: number | null;
}) {
  return (
    <Page>
      {error ? (
        <SimpleError statusCode={error} />
      ) : (
        <Dashboard coins={coins as Coin[]} />
      )}
    </Page>
  );
}
