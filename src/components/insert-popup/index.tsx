import React, { useState } from "react";
import { Button, Form, Input, Title } from "shared/ui";
import styled from "styled-components";

interface Props {
  title: string;
  isActive: boolean;
  setIsActive: (state: boolean) => void;
  onSubmit: (value: string) => void;
}

export const InsertPopup: React.FC<Props> = ({
  title = "Insert",
  isActive = false,
  setIsActive,
  onSubmit,
}) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValue("");
    onSubmit(value);
  };
  return (
    <>
      {isActive && (
        <Container>
          <Layer onClick={() => setIsActive(false)} />
          <Content>
            <Form onSubmit={handleSubmit}>
              <Title>{title}</Title>
              <Input value={value} onChange={(e) => setValue(e.target.value)} />
            </Form>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Content = styled.div`
  min-width: 500px;
  border-radius: ${({ theme }) => theme.borders.sm};
  position: absolute;
  background-color: white;
  padding-left: ${({ theme }) => theme.sizes.padding.xxl};
  padding-right: ${({ theme }) => theme.sizes.padding.xxl};
  padding-top: ${({ theme }) => theme.sizes.padding.xl};
  padding-bottom: ${({ theme }) => theme.sizes.padding.xl};
`;

const Layer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);
  position: absolute;
  width: 100%;
  height: 100%;
`;
