import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type ViewMoreButtonProps = {
  href: string;
  label?: string;
};

export function ViewMoreButton({ href, label = "자세히 보기" }: ViewMoreButtonProps) {
  return (
    <Button asChild variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50">
      <Link href={href} className="inline-flex items-center gap-2">
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}
