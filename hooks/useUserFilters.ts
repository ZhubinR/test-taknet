"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SortDirection } from "@/types/user";

interface UseUserFiltersResult {
  search: string;
  sort: SortDirection;
  setSearch: (value: string) => void;
  toggleSort: () => void;
}

export function useUserFilters(): UseUserFiltersResult {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const sort = (searchParams.get("sort") as SortDirection) ?? "asc";

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (!value) {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams]
  );

  const setSearch = useCallback(
    (value: string) => updateParams({ search: value }),
    [updateParams]
  );

  const toggleSort = useCallback(
    () => updateParams({ sort: sort === "asc" ? "desc" : "asc" }),
    [sort, updateParams]
  );

  return useMemo(
    () => ({ search, sort, setSearch, toggleSort }),
    [search, sort, setSearch, toggleSort]
  );
}