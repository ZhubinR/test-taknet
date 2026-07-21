import { UserTableSkeleton } from "@/components/users/UserTableSkeleton";

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8" dir="rtl">
      <div className="h-8 w-48 bg-muted rounded animate-pulse mb-6" />
      <UserTableSkeleton />
    </main>
  );
}