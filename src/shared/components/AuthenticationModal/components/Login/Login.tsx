"use client";

import React, { useState } from "react";
import Image from "next/image";

import styled from "styled-components";
import { Button, Checkbox, Flex, Form, Input, message } from "antd";
import type { FormProps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faDiscord,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Divider } from "antd";

import { useAuthStore } from "@/shared/store/authStore";

import styles from "../../AuthenticationModal.module.css";

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
  identifier: string;
  password: string;
  remember?: boolean;
};

export default function Login() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { login, socialLogin, isLoading, setActiveView } = useAuthStore();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    try {
      console.log(values, "VALUES");
      await login({
        identifier: values.identifier,
        password: values.password,
        remember: values.remember,
      });
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: "google" | "discord" | "facebook") => {
    socialLogin(provider);
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
        <button
          className={styles.authenticationModalSocialMediaItem}
          onClick={() => handleSocialLogin("facebook")}
          disabled={isLoading}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </button>
        <button
          className={styles.authenticationModalSocialMediaItem}
          onClick={() => handleSocialLogin("google")}
          disabled={isLoading}
        >
          <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button
          className={styles.authenticationModalSocialMediaItem}
          onClick={() => handleSocialLogin("discord")}
          disabled={isLoading}
        >
          <FontAwesomeIcon icon={faDiscord} />
        </button>
      </div>

      <StyledDivider plain>OR</StyledDivider>

      <Form<FieldType>
        form={form}
        name="login"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ color: "white" }}
        initialValues={{ remember: true }}
        className={styles.authenticationForm}
        // disabled={isLoading}
      >
        <Form.Item
          label={
            <label style={{ color: "white" }}>Username or email address</label>
          }
          name="identifier"
          rules={[
            {
              required: true,
              message: "Please input your username or email address!",
            },
          ]}
        >
          <Input
            placeholder="Enter your username or email address..."
            className={styles.authenticationFormInput}
            size="large"
          />
        </Form.Item>
        <Form.Item
          label={<label style={{ color: "white" }}>Password</label>}
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <StyledPasswordInput
            placeholder="Enter your password..."
            className={styles.authenticationFormInput}
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: "#cacaca" }}>Remember me</Checkbox>
            </Form.Item>
            <a
              onClick={() => setActiveView("forgot-password")}
              style={{
                textDecoration: "underline",
                color: "#00b9ff",
                cursor: "pointer",
              }}
            >
              Forgot password?
            </a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            size="large"
            htmlType="submit"
            style={{
              marginBottom: "10px",
              backgroundColor: "#00b9ff",
            }}
            loading={loading}
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
