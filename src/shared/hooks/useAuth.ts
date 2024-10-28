import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const { data: session, status } = useSession();
  const [initialRender, setInitialRender] = useState(true);
  const isAuthenticated = !!session;

  useEffect(() => {
    setInitialRender(false);
  }, []);

  return {
    session,
    isLoading: initialRender || status === "loading",
    status,
    isAuthenticated,
  };
};
