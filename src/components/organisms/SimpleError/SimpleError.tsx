import { statusMessages } from "@/constants";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const SimpleError = ({ statusCode }: { statusCode?: number }) => {
  return (
    <section className="w-full sm:w-[350px] mx-auto flex flex-col items-center gap-2 text-center">
      <ExclamationTriangleIcon className="text-red w-10 h-10" />
      <h2 className="text-lg lg:text-2xl font-semibold">
        {statusCode ? `Error ${statusCode}` : "Oops! Something went wrong"}
      </h2>
      {statusCode && <span>{statusMessages[statusCode]}</span>}
      <span className="text-sm text-neutral-100">
        Sorry, we couldn&apos;t process your request. Please try again later or
        contact support if the problem persists.
      </span>
    </section>
  );
};
