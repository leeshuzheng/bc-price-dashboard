import clsx from "clsx";
import { SkeletonProps } from "./types";

export const Skeleton = ({
  className,
  circle = false,
  ...props
}: SkeletonProps) => {
  return (
    <div
      className={clsx(
        "animate-pulse bg-muted/10 relative overflow-hidden",
        circle && "rounded-full",
        !circle && "rounded-md",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-muted-foreground/5 to-transparent" />
    </div>
  );
};
