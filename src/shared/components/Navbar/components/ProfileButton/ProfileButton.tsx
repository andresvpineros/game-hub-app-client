import React from "react";
import Image from "next/image";
import styles from "../../Navbar.module.css";

export default function ProfileButton() {
  return (
    <button className={styles.profileButton}>
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        width={45}
        height={45}
        className={styles.profileImage}
      />
    </button>
  );
}
