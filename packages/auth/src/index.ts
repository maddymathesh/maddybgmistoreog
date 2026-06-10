import { UserRole } from "@repo/types";

// Helper to extract role from Clerk public metadata
export function getUserRole(publicMetadata: any): UserRole {
  if (!publicMetadata || typeof publicMetadata !== "object") {
    return "USER";
  }
  const role = publicMetadata.role;
  const validRoles: UserRole[] = ["SUPER_ADMIN", "ADMIN", "TRANSACTION_MANAGER", "CONTENT_MANAGER", "USER"];
  if (typeof role === "string" && validRoles.includes(role as UserRole)) {
    return role as UserRole;
  }
  return "USER";
}

// Access level permission checks
export function isSuperAdmin(role: UserRole): boolean {
  return role === "SUPER_ADMIN";
}

export function isAdmin(role: UserRole): boolean {
  return role === "SUPER_ADMIN" || role === "ADMIN";
}

export function isTransactionManager(role: UserRole): boolean {
  return role === "SUPER_ADMIN" || role === "TRANSACTION_MANAGER";
}

export function isContentManager(role: UserRole): boolean {
  return role === "SUPER_ADMIN" || role === "ADMIN" || role === "CONTENT_MANAGER";
}

export function hasRoleAccess(userRole: UserRole, allowedRoles: UserRole[]): boolean {
  if (userRole === "SUPER_ADMIN") return true; // Super admin overrides all gates
  return allowedRoles.includes(userRole);
}
