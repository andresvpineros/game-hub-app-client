import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../../AuthenticationModal.module.css";
import { Button, Form, FormProps, Input, message } from "antd";
import { useAuthStore } from "@/shared/store/authStore";

interface FieldType {
  email: string;
}

export default function ForgotPassword() {
  const [form] = Form.useForm();
  const { isLoading, setActiveView } = useAuthStore();

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

  useEffect(() => {
    form.resetFields();
  }, [form]);

  return (
    <div className={styles.authenticationModalContent}>
      <div style={{ justifyContent: "center" }}>
        <Image src="/images/logo.png" alt="logo" width={180} height={55} />
      </div>
      <div className={styles.authenticationModalHeader}>
        <h1>Reset your password</h1>
        <p className={styles.authenticationModalHeaderDescription}>
          Enter your email below to reset your password
        </p>
      </div>

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
        <Form.Item>
          <Button
            block
            type="primary"
            size="large"
            htmlType="submit"
            className={styles.authenticationFormButton}
            loading={isLoading}
          >
            Reset Password
          </Button>
          <a
            onClick={() => setActiveView("login")}
            style={{ fontWeight: "bold", color: "#00b9ff" }}
          >
            Back to Log In
          </a>
        </Form.Item>
      </Form>
    </div>
  );
}
