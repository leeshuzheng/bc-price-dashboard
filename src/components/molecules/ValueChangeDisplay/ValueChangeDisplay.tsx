import { percentFormat } from "@/utils";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { SizeVariants } from "./types";

export const ValueChangeDisplay = ({
  change,
  size = SizeVariants.sm,
}: {
  change: number;
  size?: SizeVariants;
}) => {
  const isNegative = change < 0;
  const Icon = isNegative ? TriangleDownIcon : TriangleUpIcon;

  return (
    <span
      className={clsx("flex items-center gap-0.5 tabular-nums", {
        "text-green": !isNegative,
        "text-red": isNegative,
        "text-xl": size === SizeVariants.lg,
      })}
    >
      <Icon className={clsx({ "text-xl": size === SizeVariants.lg })} />
      {percentFormat(Math.abs(change), 100, 0, 2)}
    </span>
  );
};
