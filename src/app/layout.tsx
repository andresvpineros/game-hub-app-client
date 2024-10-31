import type { Metadata } from "next";
import { getServerSession } from "next-auth";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { config } from "@fortawesome/fontawesome-svg-core";

import Navbar from "@/shared/components/Navbar/Navbar";
import { ClientProvider } from "@/shared/providers/ClientProvider";
import { inter } from "@/shared/utils/fonts";
import { authOptions } from "./api/auth/[...nextauth]/auth-options";

import styles from "./page.module.css";
import "@/shared/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "GameHub",
  description: "Tu centro de juegos social",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <ClientProvider session={session}>
        <AntdRegistry>
          <body className={`${inter.className} ${styles.body}`}>
            <Navbar />
            <div className={styles.container}>{children}</div>
          </body>
        </AntdRegistry>
      </ClientProvider>
    </html>
  );
}
