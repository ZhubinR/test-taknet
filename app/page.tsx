import { Suspense } from "react";
import { fetchUsers } from "@/lib/api/Users";
import { UsersPageClient } from "@/components/users/UsersPageClient";
import { UserTableSkeleton } from "@/components/users/UserTableSkeleton";


async function UsersData() {
  const users = await fetchUsers(); 
  return <UsersPageClient initialUsers={users} />;
}

export default function UsersPage() {
  return (
    <main className="container mx-auto px-4 py-8" dir="rtl">
      <h1 className="text-2xl font-semibold mb-6">مدیریت کاربران</h1>
      <Suspense fallback={<UserTableSkeleton />}>
        <UsersData />
      </Suspense>
    </main>
  );
}