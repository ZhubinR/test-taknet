import { User } from "@/types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export class UsersApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "UsersApiError";
    this.status = status;
  }
}

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(API_URL, {
    // Data barely changes; a short revalidate window avoids
    // hammering the API while keeping the page reasonably fresh.
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new UsersApiError(
      `Failed to fetch users (status ${res.status})`,
      res.status
    );
  }

  return res.json();
}