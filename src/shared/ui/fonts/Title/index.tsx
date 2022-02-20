import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <h3>{children}</h3>;
};
