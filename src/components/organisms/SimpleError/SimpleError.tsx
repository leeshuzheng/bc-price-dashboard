import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const SimpleError = () => {
  return (
    <section className="w-full md:w-[350px] mx-auto flex flex-col items-center gap-2 text-center">
      <ExclamationTriangleIcon className="text-red w-10 h-10" />
      <h2 className="text-lg lg:text-2xl font-semibold">
        Oops! Something went wrong
      </h2>
      <span>
        We're sorry, but we encountered an unexpected error. Our team has been
        notified and is working on resolving the issue.
      </span>
    </section>
  );
};
