import { CoinDetails } from "@/components/organisms";
import { Page } from "@/templates";
import { useRouter } from "next/router";

export default function CoinsPage() {
  const router = useRouter();
  const coin = router.query.id;

  return (
    <Page>
      <CoinDetails coin={coin as string} />
    </Page>
  );
}
