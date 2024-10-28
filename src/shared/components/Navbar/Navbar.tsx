"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import SearchButton from "./components/SearchButton/SearchButton";
import NotificationButton from "./components/NotificationButton/NotificationButton";
import ProfileButton from "./components/ProfileButton/ProfileButton";

import styles from "./Navbar.module.css";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/social", label: "Social" },
  { href: "/forums", label: "Forums" },
  { href: "/guides", label: "Guides" },
  { href: "/gaming-sessions", label: "Gaming Sessions" },
  { href: "/leaderboard", label: "Leaderboard" },
];

export default function Navbar() {
  const pathname = usePathname();

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
            <span className={item.href === pathname ? styles.active : ""}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
      <div className={styles.navSection + " " + styles.rightSection}>
        <SearchButton />
        <NotificationButton />
        <ProfileButton />
      </div>
    </nav>
  );
}
