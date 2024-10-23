import clsx from "clsx";
import { PT_Mono } from "next/font/google";

const ptMono = PT_Mono({ weight: "400", subsets: ["latin"] });

export type StatBlockProps = {
  title: string;
  value: string;
};

export const StatBlock = ({ title, value }: StatBlockProps) => {
  return (
    <div className="flex flex-col gap-0.5 text-xl">
      <span className="text-sm text-neutral-100">{title}</span>
      <span className={clsx("font-semibold", ptMono.className)}>{value}</span>
    </div>
  );
};
