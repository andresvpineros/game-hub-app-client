// import { useAuth } from "./useAuth";
// import { useAuthStore } from "@/shared/store/authStore";

export const useProtectedFetch = () => {
  // const { requireAuth } = useAuth();
  // const setModalOpen = useAuthStore((state) => state.setModalOpen);

  // const fetchProtected = async (url: string, options?: RequestInit) => {
  //   if (!requireAuth()) {
  //     throw new Error("Authentication required");
  //   }

  //   const response = await fetch(url, {
  //     ...options,
  //     headers: {
  //       ...options?.headers,
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (response.status === 401) {
  //     setModalOpen(true);
  //     throw new Error("Unauthorized");
  //   }

  //   return response;
  // };

  // return { fetchProtected };
};
