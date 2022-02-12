import MenuBar from "./menu-bar/MenuBar";
import TopBar from "./top-bar/TopBar";

const Header: React.FC = () => {
  return (
    <>
      <TopBar />
      <MenuBar />
    </>
  );
};

export default Header;
