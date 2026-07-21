"use client";

import { User } from "@/types/user";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface UserTableProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

export function UserTable({ users, onSelectUser }: UserTableProps) {
  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader className="bg-neutral-100">
          <TableRow>
            <TableHead className="text-right">نام</TableHead>
            <TableHead className="text-right">ایمیل</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              شرکت
            </TableHead>
            <TableHead className="hidden sm:table-cell text-right">
              شهر
            </TableHead>
            <TableHead className="text-right">عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="hidden md:table-cell">
                {user.company.name}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {user.address.city}
              </TableCell>
              <TableCell>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => onSelectUser(user)}
                  className="gap-1.5 border border-neutral-200 "
                  aria-label={`مشاهده جزئیات ${user.name}`}
                >
                  <Eye className="h-4 w-4 text-yellow-500" />
                 
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}