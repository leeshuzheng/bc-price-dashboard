export const Badge = ({ title }: { title: string }) => {
  return (
    <span className="bg-neutral-200 font-semibold text-xs text-neutral-50 py-1.5 px-2.5 rounded-lg flex items-center justify-center">
      {title}
    </span>
  );
};
