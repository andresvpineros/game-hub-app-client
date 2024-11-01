"use client";

import React, { useState } from "react";

import { Modal } from "antd";
import styled from "styled-components";

import { useAuthStore } from "@/shared/store/authStore";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

const StyledModal = styled(Modal)`
  .ant-modal-close {
    color: white !important;
  }

  .ant-modal-content {
    background-color: rgba(25, 25, 25, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export default function AuthenticationModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const { activeView } = useAuthStore();
  const [resetKey, setResetKey] = useState(0);

  const handleCloseModal = () => {
    setIsOpen(false);
    setResetKey((prev) => prev + 1);
  };

  return (
    <StyledModal
      centered
      open={isOpen}
      onCancel={handleCloseModal}
      footer={null}
      cancelButtonProps={{ style: { backgroundColor: "red" } }}
      styles={{ mask: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
    >
      {activeView === "login" && <Login key={resetKey} />}
      {activeView === "signup" && <Signup key={resetKey} />}
      {activeView === "forgot-password" && <ForgotPassword key={resetKey} />}
    </StyledModal>
  );
}
