import { TrendingGames, RecentForumPosts } from "@/modules/home/ui/components";
import { getServerSession } from "next-auth/next";
// import styles from "./home.module.css";

const HomePage = () => {
  const session = getServerSession();
  console.log(session, "SESSION");

  return (
    <div className="container">
      <aside className="sidebar leftSidebar">
        <div className="sidebarSection">
          <RecentForumPosts />
        </div>
        <div className="sidebarSection">
          <TrendingGames />
        </div>
      </aside>
      <main className="mainContent">
        <div>
          <h2>Feed</h2>
        </div>
      </main>
      <aside className="sidebar rightSidebar">
        <div className="sidebarSection">
          <h2>Gaming Sessions</h2>
          {/* Add gaming sessions content here */}
        </div>
        <div className="sidebarSection">
          <h2>Friends</h2>
          {/* Add friends list here */}
        </div>
      </aside>
    </div>
  );
};

export default HomePage;
