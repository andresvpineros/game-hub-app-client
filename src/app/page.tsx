import { redirect } from "next/navigation";

/*
  1. Check authentication status
  2. Handle any necessary data prefetching
  3. Provide different redirects based on user state
*/
export default function Home() {
  redirect("/home");
}
