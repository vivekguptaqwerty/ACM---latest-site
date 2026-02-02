export function isUnauthorizedError(error: Error): boolean {
  return /^401: .*Unauthorized/.test(error.message);
}

// Redirect to login with a toast notification (disabled for frontend-only mode)
export function redirectToLogin(toast?: (options: { title: string; description: string; variant: string }) => void) {
  if (toast) {
    toast({
      title: "Authentication Disabled",
      description: "This is a frontend-only demo. Auth is not available.",
      variant: "default",
    });
  }
  console.log("Login redirect - auth disabled in frontend-only mode");
}
