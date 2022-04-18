import React from "react";
import styled from "styled-components";

const Input = styled.input`
  background: rgba(0, 0, 0, 0);
  padding: 15px;
  font-size: 15px;
  transition: all 0.3s ease;
  border: 2px solid var(--primary-color10);
  border-radius: 20px;
  color: #fcfcfc;
  text-align: center;
`;

const LeftInputButton = styled.button`
  border-radius: 20px;
  border: 2px solid #fcfcfc;
  background-color: var(--primary--color10);

  &:hover {
    border: 2px solid #fcfcfc;
    background-color: #fcfcfc;
  }
`;

const RightInputButton = styled.button`
  border-radius: 20px;
  border: 2px solid #fcfcfc;
  background-color: var(--primary--color10);

  &:hover {
    border: 2px solid #fcfcfc;
    background-color: #fcfcfc;
  }
`;

const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 40px;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
`;

export default function InputButton(props) {
  const { count, setCount } = props;

  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const incrementCount = () => {
    if (count > 4) {
      setCount(5);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <InputButtonContainer>
      <LeftInputButton onClick={decrementCount}>-</LeftInputButton>
      <Input
        type="number"
        readOnly
        name="clicks"
        min="1"
        max="5"
        disabled="disabled"
        value={count}
        onChange={(event) => {
          setCount(event.target.value);
        }}
      />
      <RightInputButton onClick={incrementCount}>+</RightInputButton>
    </InputButtonContainer>
  );
}
