import React from "react";
import styles from "../../Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function NotificationButton() {
  return (
    <button className={styles.notificationButton}>
      <FontAwesomeIcon icon={faBell} size="lg" />
    </button>
  );
}
