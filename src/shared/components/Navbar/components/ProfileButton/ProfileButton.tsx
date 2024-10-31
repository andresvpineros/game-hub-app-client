"use client";

import React from "react";
import Image from "next/image";

import styles from "../../Navbar.module.css";
import { useAuthStore } from "@/shared/store/authStore";

export default function ProfileButton() {
  const { logout, isLoading } = useAuthStore();

  const handleCloseSession = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      className={styles.profileButton}
      onClick={handleCloseSession}
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
