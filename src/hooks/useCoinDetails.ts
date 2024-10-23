import { baseApiUrl } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export const useCoinDetails = (coinId: string) => {
  return useQuery({
    queryKey: ["coinDetails", coinId],
    queryFn: async () => {
      const response = await fetch(`${baseApiUrl}/coins/${coinId}`);
      return response.json();
    },
    enabled: !!coinId,
  });
};
