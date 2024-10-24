"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/social", label: "Social" },
  { href: "/forums", label: "Forums" },
  { href: "/guides", label: "Guides" },
  { href: "/gaming-sessions", label: "Gaming Sessions" },
  { href: "/leaderboard", label: "Leaderboard" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navSection + " " + styles.leftSection}>
        <Link href="/home">
          <Image src="/images/logo.png" alt="Logo" width={180} height={55} />
        </Link>
      </div>
      <div className={styles.navSection + " " + styles.centerSection}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={styles.link}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className={styles.navSection + " " + styles.rightSection}>
        <button className={styles.searchButton}>🔍</button>
        <button className={styles.notificationButton}>🔔</button>
        <button className={styles.profileButton}>👤</button>
      </div>
    </nav>
  );
}
