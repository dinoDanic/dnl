import Link from "next/link";
import React from "react";
import { Li } from "./styles";

interface menuItemProps {
  name: string;
  pathname: string;
}

const MenuItem: React.FC<menuItemProps> = ({ name, pathname }) => {
  const isActive = `/${name}` === pathname;

  return (
    <Link href="">
      <Li active={isActive}>{name}</Li>
    </Link>
  );
};

export default MenuItem;
