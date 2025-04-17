"use client";

import React from "react";
import "./user.module.css";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/shared/store/authStore";

// import { notFound } from "next/navigation";

const UserPage = ({ params }: { params: { username: string } }) => {
  const { username } = params;
  const router = useRouter();
  const { logout } = useAuthStore();

  // const user = await getUserByUsername(username);
  //if (!user) return notFound();

  const handleCloseSession = async () => {
    try {
      router.push("/home");
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="container">
      <aside className="sidebar leftSidebar">
        <div className="sidebarSection">
          <ul>
            <li>Profile</li>
            <li>Stats</li>
            <li>Forum History</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="sidebarSection">
          <button onClick={() => handleCloseSession()}>Close Session</button>
        </div>
      </aside>
      <main className="mainContent">
        <div>
          <h2>{username}&apos;s Profile</h2>
        </div>
      </main>
      <aside className="sidebar rightSidebar">
        <div className="sidebarSection">
          <h2>Platform Ranks</h2>
          {/* Add gaming sessions content here */}
        </div>
      </aside>
    </div>
  );
};

export default UserPage;
