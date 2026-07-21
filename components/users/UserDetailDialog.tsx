"use client";

import { User } from "@/types/user";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface UserDetailDialogProps {
  user: User | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UserDetailDialog({
  user,
  open,
  onOpenChange,
}: UserDetailDialogProps) {
  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader className="mb-4">
          <DialogTitle>{user.name}</DialogTitle>
        </DialogHeader>

        <dl className="space-y-3 text-sm">
          <DetailRow label="نام کاربری" value={user.username} />
          
          <DetailRow label="ایمیل" value={user.email} />
          <DetailRow label="تلفن" value={user.phone} />
          <DetailRow label="وبسایت" value={user.website} />
          <DetailRow
            label="آدرس"
            value={`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
          />
          <DetailRow label="شرکت" value={user.company.name} />
        </dl>
      </DialogContent>
    </Dialog>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 pb-3 border-b last:border-b-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-left" dir="ltr">
        {value}
      </dd>
    </div>
  );
}