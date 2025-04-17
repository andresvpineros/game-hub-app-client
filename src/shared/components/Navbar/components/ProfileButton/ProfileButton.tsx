"use client";

import React from "react";
import Image from "next/image";

import styles from "../../Navbar.module.css";
import { useAuthStore } from "@/shared/store/authStore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProfileButton() {
  const { data: session } = useSession();
  const router = useRouter();
  const { isLoading } = useAuthStore();

  const redirectToUserProfile = async () => {
    try {
      router.push(`/user/${session?.user?.username}`);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      className={styles.profileButton}
      onClick={redirectToUserProfile}
      disabled={isLoading}
    >
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        width={45}
        height={45}
        className={styles.profileImage}
        priority
      />
    </button>
  );
}
