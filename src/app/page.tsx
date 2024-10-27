import { redirect } from "next/navigation";
import { getSession } from "@/shared/utils/getSession";
/*
  1. Check authentication status
  2. Handle any necessary data prefetching
  3. Provide different redirects based on user state
*/
export default async function Home() {
  const session = await getSession();
  console.log(session);

  if (!session) {
    console.log(session);
    redirect("/home");
  }

  redirect("/home");
}
