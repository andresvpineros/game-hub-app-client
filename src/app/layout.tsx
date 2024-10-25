import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/shared/components/Navbar/Navbar";
import styles from "./page.module.css";
import "@/shared/styles/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { inter } from "@/shared/utils/fonts";

export const metadata: Metadata = {
  title: "GameHub",
  description: "Tu centro de juegos social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <AntdRegistry>
          <Navbar />
          <div className={styles.container}>{children}</div>
        </AntdRegistry>
      </body>
    </html>
  );
}
