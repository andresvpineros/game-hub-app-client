import { TrendingGames, RecentForumPosts } from "@/modules/home/ui/components";
import styles from "./page.module.css";
import { getServerSession } from "next-auth/next";

export default function HomePage() {
  const session = getServerSession();
  console.log(session, "SESSION");

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar + " " + styles.leftSidebar}>
        <div className={styles.sidebarSection}>
          <RecentForumPosts />
        </div>
        <div className={styles.sidebarSection}>
          <TrendingGames />
        </div>
      </aside>
      <main className={styles.mainContent}>
        <div>
          <h2>Feed</h2>
        </div>
      </main>
      <aside className={styles.sidebar + " " + styles.rightSidebar}>
        <div className={styles.sidebarSection}>
          <h2>Gaming Sessions</h2>
          {/* Add gaming sessions content here */}
        </div>
        <div className={styles.sidebarSection}>
          <h2>Friends</h2>
          {/* Add friends list here */}
        </div>
      </aside>
    </div>
  );
}
