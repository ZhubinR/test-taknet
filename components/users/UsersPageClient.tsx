"use client";

import { useMemo, useState } from "react";
import { User } from "@/types/user";
import { useUserFilters } from "@/hooks/useUserFilters";
import { UserSearchBar } from "./UserSearchBar";
import { UserSortToggle } from "./UserSortToggle";
import { UserTable } from "./UserTable";
import { UserDetailDialog } from "./UserDetailDialog";
import { EmptyState } from "./EmptyState";

interface UsersPageClientProps {
  initialUsers: User[];
}

export function UsersPageClient({ initialUsers }: UsersPageClientProps) {
  const { search, sort, setSearch, toggleSort } = useUserFilters();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = query
      ? initialUsers.filter(
          (user) =>
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query)
        )
      : initialUsers;

    return [...filtered].sort((a, b) =>
      sort === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }, [initialUsers, search, sort]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <UserSearchBar value={search} onChange={setSearch} />
        <UserSortToggle sort={sort} onToggle={toggleSort} />
      </div>

      {filteredUsers.length === 0 ? (
        <EmptyState query={search} />
      ) : (
        <UserTable users={filteredUsers} onSelectUser={setSelectedUser} />
      )}

      <UserDetailDialog
        user={selectedUser}
        open={selectedUser !== null}
        onOpenChange={(open) => !open && setSelectedUser(null)}
      />
    </div>
  );
}