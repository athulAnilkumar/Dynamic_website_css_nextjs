import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/navigation";

const Sidebar = ({ sidebarCollapsed, setSidebarCollapsed }: any) => {
  const router = useRouter();
  const onSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const onLogoutClick = () => {
    router.push("/");
  };
  return (
    <>
      <span className="expand-icon" onClick={() => onSidebarCollapse()}>
        <FontAwesomeIcon icon={faBars} />
      </span>

      <span className="logout-btn" onClick={() => onLogoutClick()}>
        Logout
      </span>
    </>
  );
};

export default Sidebar;
