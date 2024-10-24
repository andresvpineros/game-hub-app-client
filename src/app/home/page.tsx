import styles from "./page.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar + " " + styles.leftSidebar}>
        <div className={styles.sidebarSection}>
          <h2>Recent Forum Posts</h2>
          {/* Add forum posts content here */}
        </div>
        <div className={styles.sidebarSection}>
          <h2>Trending Games</h2>
          {/* Add trending games content here */}
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
