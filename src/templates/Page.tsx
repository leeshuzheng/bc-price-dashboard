import { Footer } from "@/components/organisms";
import clsx from "clsx";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        "pt-8 pb-16 md:py-14 lg:pt-24 lg:pb-28 min-h-screen",
        inter.className
      )}
    >
      <div className="container px-5 mx-auto">{children}</div>
      <Footer />
    </div>
  );
};
