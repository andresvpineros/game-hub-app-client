import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./RecentForumPosts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { abbreviateNumber } from "@/shared/utils/abbreviateNumber";

const recentForumPosts = [
  {
    id: 1,
    title: "The last cartoon you watch...",
    author: "Purplegrave",
    category: "Off Topic",
    imageUrl: "/images/recentForumPostsProfiles/user_profile_1.jpg",
    views: 340,
  },
  {
    id: 2,
    title: "This isn't a children's game",
    author: "Erick_",
    category: "PlayStation 4",
    imageUrl: "/images/recentForumPostsProfiles/user_profile_2.jpg",
    views: 1100,
  },
  {
    id: 3,
    title: "Worst ending ever",
    author: "Alex75",
    category: "Xbox 360",
    imageUrl: "/images/recentForumPostsProfiles/user_profile_3.jpg",
    views: 3300,
  },
  {
    id: 4,
    title: "What are u listening to whe...",
    author: "Javi_23",
    category: "Media Room",
    imageUrl: "/images/recentForumPostsProfiles/user_profile_4.jpg",
    views: 569,
  },
  {
    id: 5,
    title: "Easiest trophies for RDR2 in...",
    author: "CondorPaine",
    category: "PC - Steam",
    imageUrl: "/images/recentForumPostsProfiles/user_profile_5.jpg",
    views: 4300,
  },
];

export default function RecentForumPosts() {
  return (
    <section className={styles.container}>
      <h1 className={styles.sectionTitle}>Recent Forum Posts</h1>
      <ul>
        {recentForumPosts.map((post) => (
          <li key={post.id} className={styles.post}>
            <div className={styles.postContent}>
              <Image
                src={post.imageUrl}
                alt={post.title}
                className={styles.profileImage}
                width={50}
                height={50}
              />
              <div className={styles.postInfo}>
                <Link href={`/forum/${post.id}`} className={styles.title}>
                  {post.title}
                </Link>
                <div className={styles.author}>
                  By <span className={styles.authorName}>{post.author}</span> in{" "}
                  <span className={styles.category}>{post.category}</span>
                </div>
              </div>
            </div>
            <div className={styles.views}>
              <FontAwesomeIcon
                icon={faEye}
                className={styles.eyeIcon}
                size="sm"
              />
              <span className={styles.viewsCount}>
                {abbreviateNumber(post.views)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
