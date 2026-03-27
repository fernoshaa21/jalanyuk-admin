export type UserRole = "admin" | "seller";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};
