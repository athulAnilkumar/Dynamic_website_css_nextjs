import { useRouter } from "next/navigation";

const Header = ({ selectedMenu, setSelectedMenu }: any) => {
  const onMenuChange = (menu: string) => {
    setSelectedMenu(menu);
  };

  const isSelected = (menu: string) => {
    return selectedMenu === menu;
  };

  return (
    <div className="header-layout">
      <span>LOGO</span>
      <span
        className={isSelected("home") ? "selected" : ""}
        onClick={() => onMenuChange("home")}
      >
        Home
      </span>
      <span
        className={isSelected("about") ? "selected" : ""}
        onClick={() => onMenuChange("about")}
      >
        About
      </span>
      <span
        className={isSelected("contact") ? "selected" : ""}
        onClick={() => onMenuChange("contact")}
      >
        Contact
      </span>
      <span className="profile-wrapper">PROFILE</span>
    </div>
  );
};

export default Header;
