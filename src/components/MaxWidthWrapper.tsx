import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
}

const MaxWidthWrapper = ({ className }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      Hi
    </div>
  );
};

export default MaxWidthWrapper;
