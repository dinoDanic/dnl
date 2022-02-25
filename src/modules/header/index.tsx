import styled from "styled-components";
import MenuBar from "./menu-bar/MenuBar";
import TopBar from "./top-bar/TopBar";

export const Header: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <MenuBar />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;
