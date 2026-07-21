"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      className="container mx-auto px-4 py-16 flex flex-col items-center text-center gap-4"
      dir="rtl"
    >
      <h2 className="text-xl font-semibold">خطا در دریافت اطلاعات کاربران</h2>
      <p className="text-muted-foreground max-w-md">
        {error.message ||
          "مشکلی در ارتباط با سرور پیش آمد. لطفاً دوباره تلاش کنید."}
      </p>
      <Button onClick={reset}>تلاش مجدد</Button>
    </main>
  );
}