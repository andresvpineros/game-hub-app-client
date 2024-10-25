import React from "react";
import styles from "../../Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchButton() {
  return (
    <button className={styles.searchButton}>
      <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
    </button>
  );
}
