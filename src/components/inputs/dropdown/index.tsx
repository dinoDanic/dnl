import React, { useState } from "react";
import styled from "styled-components";
import { SelectOption } from "types";

interface Props {
  options: SelectOption[];
  initialValue?: string;
  onChange: (option: SelectOption) => void;
}

export const Dropdown: React.FC<Props> = ({
  options,
  initialValue,
  onChange,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue || "");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsActive(false);
    onChange(options.find((o) => o.value === value)!);
  };

  return (
    <Select>
      <Header>
        <SelectWindow onClick={() => setIsActive(true)}>
          {selectedValue ? selectedValue : "Select"}
        </SelectWindow>
      </Header>
      {isActive && (
        <SelectList>
          {options.map((option) => {
            return (
              <SelectItem
                onClick={() => handleSelect(option.value)}
                key={option.id}
              >
                {option.value}
              </SelectItem>
            );
          })}
        </SelectList>
      )}
    </Select>
  );
};

const Select = styled.div`
  max-width: 159px;
  position: relative;
`;

const Header = styled.div``;

const SelectWindow = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.quinaryDark};
  padding: 6px;
  display: flex;
  align-items: center;
`;

const Text = styled.div``;

const SelectList = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.quinaryDark};
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  top: 30px;
  padding: 10px;
`;

const SelectItem = styled.div``;
