import React from "react";
import styled from "styled-components";

interface Props extends FlexProps {
  children: JSX.Element | JSX.Element[];
}
interface FlexProps {
  justifyContent?: "flex-end" | "flex-start" | "center" | "space-between";
  alignItems?: "center" | "space-between";
  flexDirection?: "column" | "row";
}

export const Flex: React.FC<Props> = ({
  children,
  justifyContent,
  flexDirection,
  alignItems,
}) => {
  return (
    <Container
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      alignItems={alignItems}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  gap: 1.5rem;
`;
