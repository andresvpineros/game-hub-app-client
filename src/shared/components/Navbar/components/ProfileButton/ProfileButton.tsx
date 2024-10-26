"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../../Navbar.module.css";
import AuthenticationModal from "@/shared/components/AuthenticationModal/AuthenticationModal";

export default function ProfileButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button className={styles.profileButton} onClick={handleOpenModal}>
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          width={45}
          height={45}
          className={styles.profileImage}
        />
      </button>
      <AuthenticationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}
