import MenuItem from "./menu-item/MenuItem";
import { useRouter } from "next/router";
import { menuLinks } from "./menu-links";
import { Container, Flex } from "components/ui";

const MenuBar: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <Container>
      <Flex>
        {menuLinks.map((item) => {
          const { id, name } = item;
          return <MenuItem key={id} name={name} pathname={pathname} />;
        })}
      </Flex>
    </Container>
  );
};

export default MenuBar;
