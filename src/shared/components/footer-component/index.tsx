import React from "react";
import { BoxStyle, Button } from "shared/ui";
import styled from "styled-components";
import { FooterComponentProps } from "types";

export const FooterComponent: React.FC<FooterComponentProps> = ({
  title = "Tips",
  description,
  children,
}) => {
  return (
    <FooterComponentC>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
      <Actions>{children}</Actions>
    </FooterComponentC>
  );
};

const FooterComponentC = styled.div`
  ${BoxStyle}
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    margin-right: ${({ theme }) => theme.sizes.margin.md};
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Content = styled.div``;
const Actions = styled.div``;

const Title = styled.h5`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5px;
`;
const Description = styled.h5`
  color: ${({ theme }) => theme.colors.quinaryDark};
  font-weight: 300;
`;
