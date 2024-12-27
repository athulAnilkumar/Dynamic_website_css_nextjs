import About from "../Menus/About";
import Contact from "../Menus/Contact";
import Home from "../Menus/Home";

const RenderDashboardMenu = ({ selectedMenu }: any) => {
  return (
    <>
      {selectedMenu === "home" && <Home />}
      {selectedMenu === "about" && <About />}
      {selectedMenu === "contact" && <Contact />}
    </>
  );
};

export default RenderDashboardMenu;
