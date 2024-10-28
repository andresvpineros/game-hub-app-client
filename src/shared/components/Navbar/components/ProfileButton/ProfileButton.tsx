"use client";

import React from "react";
import Image from "next/image";

import { Button } from "antd";

import { useAuth } from "@/shared/hooks/useAuth";
import { useAuthStore } from "@/shared/store/authStore";
import AuthenticationModal from "@/shared/components/AuthenticationModal/AuthenticationModal";

import styles from "../../Navbar.module.css";

export default function ProfileButton() {
  const { isModalOpen, setModalOpen, logout, isLoading } = useAuthStore();
  const { isAuthenticated } = useAuth();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseSession = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      {isAuthenticated ? (
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
            priority // Add this to prioritize loading
          />
        </button>
      ) : (
        <Button
          size="large"
          onClick={handleOpenModal}
          style={{ marginLeft: "10px" }}
        >
          Login
        </Button>
      )}

      <AuthenticationModal isOpen={isModalOpen} setIsOpen={setModalOpen} />
    </>
  );
}
