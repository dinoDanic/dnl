import MenuBar from "./menu-bar/MenuBar";
import TopBar from "./top-bar/TopBar";

export const Header: React.FC = () => {
  return (
    <>
      <TopBar />
      <MenuBar />
    </>
  );
};
