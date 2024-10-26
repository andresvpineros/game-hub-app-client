"use client";

import React from "react";
import styles from "../../AuthenticationModal.module.css";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import styled from "styled-components";
import type { FormProps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faDiscord,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Divider } from "antd";
import Image from "next/image";

const StyledPasswordInput = styled(Input.Password)`
  &.ant-input-password .ant-input::placeholder {
    color: #999 !important;
  }

  &.ant-input-password .ant-input-suffix .anticon {
    color: #999 !important;
  }
`;

const StyledDivider = styled(Divider)`
  border-color: #cacaca !important;
  border-width: 1px !important;
  color: #cacaca !important;
  font-size: 10px;
`;

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function Login() {
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.authenticationModalContent}>
      <div style={{ justifyContent: "center" }}>
        <Image src="/images/logo.png" alt="logo" width={180} height={55} />
      </div>
      <div className={styles.authenticationModalHeader}>
        <h1>Welcome to the game</h1>
        <p className={styles.authenticationModalHeaderDescription}>
          Please enter your details to interact with the community
        </p>
      </div>

      <div className={styles.authenticationModalSocialMedia}>
        <div className={styles.authenticationModalSocialMediaItem}>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className={styles.authenticationModalSocialMediaItem}>
          <FontAwesomeIcon icon={faGoogle} />
        </div>
        <div className={styles.authenticationModalSocialMediaItem}>
          <FontAwesomeIcon icon={faDiscord} />
        </div>
      </div>

      <StyledDivider plain>OR</StyledDivider>

      <Form
        form={form}
        name="login"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ color: "white" }}
        initialValues={{ remember: true }}
        className={styles.authenticationForm}
      >
        <Form.Item<FieldType>
          label={<label style={{ color: "white" }}>Username</label>}
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            placeholder="Enter your username..."
            className={styles.authenticationFormInput}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label={<label style={{ color: "white" }}>Password</label>}
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <StyledPasswordInput
            placeholder="Enter your password..."
            className={styles.authenticationFormInput}
          />
        </Form.Item>

        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: "#cacaca" }}>Remember me</Checkbox>
            </Form.Item>
            <a
              href=""
              style={{ textDecoration: "underline", color: "#00b9ff" }}
            >
              Forgot password?
            </a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            style={{
              marginBottom: "10px",
              backgroundColor: "#00b9ff",
            }}
          >
            Log in
          </Button>
          <span style={{ color: "#cacaca" }}>
            Don&apos;t have an account yet?
          </span>{" "}
          <a href="" style={{ fontWeight: "bold", color: "#00b9ff" }}>
            Register now!
          </a>
        </Form.Item>
      </Form>
    </div>
  );
}
