import Link from "next/link";
import React from "react";
import { Li } from "./styles";

interface menuItemProps {
  name: string;
  pathname: string;
}

const MenuItem: React.FC<menuItemProps> = ({ name, pathname }) => {
  const nameAsLink = `/${name}`;

  const isActive = pathname.includes(nameAsLink);

  return (
    <Link passHref href={nameAsLink}>
      <Li active={isActive}>{name}</Li>
    </Link>
  );
};

export default MenuItem;
