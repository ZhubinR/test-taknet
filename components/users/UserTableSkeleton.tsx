export function UserTableSkeleton() {
  return (
    <div className="rounded-md border">
      <div className="divide-y">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex gap-4 p-4">
            <div className="h-4 w-32 bg-muted rounded animate-pulse" />
            <div className="h-4 w-48 bg-muted rounded animate-pulse" />
            <div className="h-4 w-24 bg-muted rounded animate-pulse hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  );
}