interface EmptyStateProps {
  query: string;
}

export function EmptyState({ query }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
      <p className="text-base">
        {query
          ? `نتیجه‌ای برای «${query}» یافت نشد.`
          : "هیچ کاربری برای نمایش وجود ندارد."}
      </p>
    </div>
  );
}