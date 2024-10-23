import clsx from "clsx";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx("pt-8 md:py-14 lg:py-20 min-h-screen", inter.className)}
    >
      {children}
    </div>
  );
};
