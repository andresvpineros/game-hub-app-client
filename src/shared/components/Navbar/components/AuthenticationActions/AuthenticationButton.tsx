import React from "react";
import { Button } from "antd";
import AuthenticationModal from "@/shared/components/AuthenticationModal/AuthenticationModal";
import { useAuthStore } from "@/shared/store/authStore";
import styles from "../../Navbar.module.css";

export default function AuthenticationActions() {
  const { isModalOpen, setModalOpen, setActiveView } = useAuthStore();

  const handleOpenLoginModal = () => {
    setModalOpen(true);
    setActiveView("login");
  };

  const handleOpenSignupModal = () => {
    setModalOpen(true);
    setActiveView("signup");
  };

  return (
    <>
      <div className={styles.authenticationActions}>
        <Button
          size="large"
          onClick={handleOpenLoginModal}
          className={styles.logInButton}
        >
          Log In
        </Button>
        <Button
          size="large"
          onClick={handleOpenSignupModal}
          className={styles.signUpButton}
        >
          Sign Up
        </Button>
      </div>

      <AuthenticationModal isOpen={isModalOpen} setIsOpen={setModalOpen} />
    </>
  );
}
