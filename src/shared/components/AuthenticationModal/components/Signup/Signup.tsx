import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../../AuthenticationModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { useAuthStore } from "@/shared/store/authStore";
import { StyledDivider, StyledPasswordInput } from "../../styles";
import { Button, Form, FormProps, Input, message } from "antd";

type FieldType = {
  username: string;
  email: string;
  password: string;
};

export default function Signup() {
  const [form] = Form.useForm();
  const { socialLogin, isLoading, setActiveView } = useAuthStore();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      console.log(values, "VALUES");
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error("An unexpected error occurred");
      }
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleSocialLogin = (provider: "google" | "discord" | "facebook") => {
    socialLogin(provider);
  };

  useEffect(() => {
    form.resetFields();
  }, [form]);

  return (
    <div className={styles.authenticationModalContent}>
      <div style={{ justifyContent: "center" }}>
        <Image src="/images/logo.png" alt="logo" width={180} height={55} />
      </div>
      <div className={styles.authenticationModalHeader}>
        <h1>Create your account</h1>
        <p className={styles.authenticationModalHeaderDescription}>
          Please enter your details to create an account
        </p>
      </div>

      <p className={styles.authenticationModalSocialMediaTitle}>
        Register with:
      </p>
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
      >
        <Form.Item
          label={<label style={{ color: "white" }}>Username</label>}
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            placeholder="Enter your username..."
            className={styles.authenticationFormInput}
            size="large"
          />
        </Form.Item>
        <Form.Item
          label={<label style={{ color: "white" }}>Email address</label>}
          name="email"
          rules={[
            { required: true, message: "Please input your email address!" },
          ]}
        >
          <Input
            placeholder="Enter your email address..."
            className={styles.authenticationFormInput}
            size="large"
          />
        </Form.Item>
        <Form.Item
          label={<label style={{ color: "white" }}>Password</label>}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <StyledPasswordInput
            placeholder="Enter your password..."
            className={styles.authenticationFormInput}
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          label={<label style={{ color: "white" }}>Confirm Password</label>}
          dependencies={["password"]}
          rules={[{ required: true, message: "Please confirm your password!" }]}
        >
          <StyledPasswordInput
            placeholder="Confirm your password..."
            className={styles.authenticationFormInput}
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button
            block
            type="primary"
            size="large"
            htmlType="submit"
            className={styles.authenticationFormButton}
            loading={isLoading}
          >
            Sign Up
          </Button>
          <span style={{ color: "#cacaca" }}>Already have an account?</span>{" "}
          <a
            onClick={() => setActiveView("login")}
            style={{ fontWeight: "bold", color: "#00b9ff" }}
          >
            Log in now!
          </a>
        </Form.Item>
        <p style={{ color: "#cacaca" }}>
          By creating an account, you agree to our Terms of Service.
        </p>
      </Form>
    </div>
  );
}
