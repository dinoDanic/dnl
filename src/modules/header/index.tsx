import styled from "styled-components";
import MenuBar from "./menu-bar/MenuBar";

export const Header: React.FC = () => {
  return (
    <Container>
      <MenuBar />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;
