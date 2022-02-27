import { Label } from "components/ui";
import React, { useState } from "react";
import styled from "styled-components";
import { defaultInputStyle } from "styles/input";
import { SelectOption } from "types";
import { Button } from "..";

interface Props {
  options: SelectOption[];
  label: string;
  initialValue?: string;
  onChange: (option: SelectOption) => void;
  placeholder: string;
  onButtonClick?: () => void;
}

export const Dropdown: React.FC<Props> = ({
  options,
  initialValue,
  onChange,
  label,
  placeholder = "Select",
  onButtonClick,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue || "");

  const handleSelect = (name: string) => {
    setSelectedValue(name);
    setIsActive(false);
    onChange(options.find((o) => o.name === name)!);
  };

  return (
    <>
      <Select>
        <Label>{label}</Label>
        <Header>
          <SelectWindow onClick={() => setIsActive(true)}>
            {selectedValue ? (
              selectedValue
            ) : (
              <Placeholder>{placeholder}</Placeholder>
            )}
          </SelectWindow>
        </Header>
        {isActive && (
          <>
            <Layer onClick={() => setIsActive(false)} />
            <SelectList>
              {options?.map((option) => {
                return (
                  <SelectItem
                    onClick={() => handleSelect(option.name)}
                    key={option.id}
                  >
                    <SelectName>{option.name}</SelectName>
                  </SelectItem>
                );
              })}
              {onButtonClick && (
                <CreateNew>
                  <Button type="button" onClick={onButtonClick} width="100%">
                    Create new
                  </Button>
                </CreateNew>
              )}
            </SelectList>
          </>
        )}
      </Select>
    </>
  );
};

const Select = styled.div`
  position: relative;
`;

const Header = styled.div``;

const SelectWindow = styled.div`
  ${defaultInputStyle}
  cursor: pointer;
`;

const Text = styled.div``;

const SelectList = styled.div`
  ${defaultInputStyle}
  background-color: ${({ theme }) => theme.colors.light};
  position: absolute;
  width: 100%;
  top: 72px;
  padding: 10px;
  max-height: 220px;
  overflow-y: auto;
`;

const SelectItem = styled.div``;

const Placeholder = styled.div`
  color: ${({ theme }) => theme.colors.quinaryDark};
`;

const SelectName = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.md};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border-radius: ${({ theme }) => theme.borders.xs};
  }
`;

const CreateNew = styled.div`
  margin-top: ${({ theme }) => theme.sizes.margin.md};
`;

const Layer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
