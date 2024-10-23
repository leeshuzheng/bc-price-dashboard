import { Skeleton } from "@/components/molecules";

export const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <Skeleton className="h-5 w-[112px]" />
        <Skeleton className="h-5 w-[112px]" />
        <Skeleton className="h-5 w-[112px]" />
      </div>
      <Skeleton className="h-6 w-[155px]" />
      <Skeleton className="h-9 w-[205px]" />
      <div className="mt-5">
        <Skeleton className="h-9 w-[105px]" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="col-span-1 flex flex-col">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-6 w-[70%]" />
              <Skeleton className="h-8 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
