"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface UserSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function UserSearchBar({ value, onChange }: UserSearchBarProps) {
  return (
    <div className="relative max-w-sm">
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="جستجو بر اساس نام یا ایمیل..."
        className="pr-9"
        aria-label="جستجوی کاربران"
      />
    </div>
  );
}