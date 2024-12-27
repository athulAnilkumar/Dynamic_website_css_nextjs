"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const LayoutIndex = ({ selectedMenu, setSelectedMenu, children }: any) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="layout-container">
      <div className="header-container">
        <Header selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      </div>
      <div
        className={
          sidebarCollapsed ? "sidebar-container collapsed" : "sidebar-container"
        }
      >
        <Sidebar
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />
      </div>
      <div
        className={
          sidebarCollapsed ? "content-area sidebar-collapsed " : "content-area"
        }
      >
        {children && children}
      </div>
    </div>
  );
};

export default LayoutIndex;
