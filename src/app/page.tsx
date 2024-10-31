"use client";

import { redirect } from "next/navigation";
import { useAuth } from "@/shared/hooks/useAuth";
/*
  1. Check authentication status
  2. Handle any necessary data prefetching
  3. Provide different redirects based on user state
*/
export default function Home() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    console.log(isAuthenticated);
    redirect("/home");
  }

  redirect("/home");
}
