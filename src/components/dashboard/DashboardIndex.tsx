"use client";

import { useEffect, useState } from "react";

import LayoutIndex from "./LayoutIndex";
import RenderDashboardMenu from "./RenderDashboardMenu";

const DashboardIndex = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  useEffect(() => {
    setSelectedMenu("home");
  }, []);

  return (
    <LayoutIndex selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}>
      <RenderDashboardMenu selectedMenu={selectedMenu} />
    </LayoutIndex>
  );
};

export default DashboardIndex;
