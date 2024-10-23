import clsx from "clsx";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx("py-8 md:py-14 lg:py-20 min-h-screen", inter.className)}
    >
      <div className="container px-5 mx-auto">{children}</div>
    </div>
  );
};
