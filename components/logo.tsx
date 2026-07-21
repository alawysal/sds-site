import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-label="SAL Data Solutions">
      <Image
        src="/brand/site_logo.svg"
        alt="SAL Data Solutions"
        width={168}
        height={168}
        priority
        className="h-14 w-14 rounded-sds bg-white object-contain transition-colors dark:bg-[#071225]"
      />
    </div>
  );
}
