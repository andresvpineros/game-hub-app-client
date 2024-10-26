import styles from "./page.module.css";
import { TrendingGames, RecentForumPosts } from "@/modules/home/ui/components";

function HomePage() {
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

export default HomePage;
