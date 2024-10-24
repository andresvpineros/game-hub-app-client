"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/social", label: "Social" },
  { href: "/forums", label: "Forums" },
  { href: "/guides", label: "Guides" },
  { href: "/gaming-sessions", label: "Gaming Sessions" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/my-profile", label: "My profile" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.section}>
        <a href="/" className={styles.logo}>
          Logo
        </a>
      </div>
      <div className={styles.section}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={styles.link}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className={styles.section}>
        <button className={styles.button}>Sign In</button>
      </div>
    </nav>
  );
}
