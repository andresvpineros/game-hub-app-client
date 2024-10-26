"use client";

import React from "react";
import { Modal } from "antd";
import Login from "./components/Login/Login";
import styled from "styled-components";

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
  const handleCloseModal = () => {
    setIsOpen(false);
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
      <Login />
    </StyledModal>
  );
}
