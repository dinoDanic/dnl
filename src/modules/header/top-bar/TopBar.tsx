import { Container } from "components/ui";
import styled from "styled-components";

const TopBar: React.FC = () => {
  return (
    <Container>
      <Logo>dnl</Logo>
    </Container>
  );
};

const Logo = styled.div`
  color: white;
`;

export default TopBar;
