import React from "react";

type BoxType = {
  children: React.ReactNode;
};

export const Box: React.FC<BoxType> = ({ children }) => {
  return <div>{children}</div>;
};
/* TODO: Slozi stil za box */
