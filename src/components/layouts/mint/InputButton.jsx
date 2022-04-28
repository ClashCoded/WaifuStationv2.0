import React from "react";
import styled from "styled-components";

const Input = styled.input`
  background: rgba(0, 0, 0, 0);
  padding: 15px;
  font-size: 15px;
  transition: all 0.3s ease;
  border: 2px solid var(--primary-color2);
  border-radius: 20px;
  color: #fcfcfc;
  text-align: center;
`;

const LeftInputButton = styled.button`
  border-radius: 20px;
  border: 2px solid #FD9DCB;
  background-color: var(--primary--color2);
  color: var(--primary-color2);
  font-size: 2rem;

  &:hover {
    border: 2px solid #FD9DCB;
    background-color: #FD9DCB;
    color: #FCFCFC;
    transform: scale(1.1);
    text-shadow: 0 0 10px #fff,
                 0 0 20px #fff,
                 0 0 40px #fff,
                 0 0 80px #fff,
                 0 0 120px #fff;
  }
`;

const RightInputButton = styled.button`
  border-radius: 20px;
  border: 2px solid #FD9DCB;
  background-color: var(--primary--color2);
  color: var(--primary-color2);
  font-size: 2rem;

  &:hover {
    border: 2px solid #FD9DCB;
    background-color: #FD9DCB;
    color: #FCFCFC;
    transform: scale(1.1);
    text-shadow: 0 0 10px #fff,
                 0 0 20px #fff,
                 0 0 40px #fff,
                 0 0 80px #fff,
                 0 0 120px #fff;
  }
`;

const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 65%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 1150px) {
    width: 85%;

  }
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
