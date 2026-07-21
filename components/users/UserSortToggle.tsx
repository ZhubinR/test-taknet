"use client";

import { Button } from "@/components/ui/button";
import { SortDirection } from "@/types/user";
import { ArrowDownAZ, ArrowUpAZ } from "lucide-react";

interface UserSortToggleProps {
  sort: SortDirection;
  onToggle: () => void;
}

export function UserSortToggle({ sort, onToggle }: UserSortToggleProps) {
  const isAsc = sort === "asc";

  return (
    <Button
      type="button"
      variant="outline"
      onClick={onToggle}
      className="gap-2 shrink-0"
      aria-label={`مرتب‌سازی بر اساس نام (${isAsc ? "صعودی" : "نزولی"})`}
    >
      {isAsc ? (
        <ArrowDownAZ className="h-4 w-4" />
      ) : (
        <ArrowUpAZ className="h-4 w-4" />
      )}
      نام ({isAsc ? "صعودی" : "نزولی"})
    </Button>
  );
}