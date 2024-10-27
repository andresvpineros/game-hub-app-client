import { cookies } from "next/headers";

export const getSession = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const userCookie = cookieStore.get("user");

  if (token && userCookie) {
    try {
      const user = JSON.parse(userCookie.value);
      return { user };
    } catch (error) {
      console.error("Error parsing user cookie:", error);
    }
  }

  return null;
};
