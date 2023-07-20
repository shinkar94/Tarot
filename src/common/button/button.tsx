import React, {FC} from 'react';
import styled from "styled-components";

type Props = {
    name: string
    callBack: ()=>void
}
export const Button:FC<Props> = ({name, callBack}) => {
    return (
        <StRegButton>{name}</StRegButton>
    );
};

const StRegButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  background: linear-gradient(to right, #F45F16, #E74856, #E8182A);
  font-family: kamerik-205-heavy, serif;
  font-size: var(--index);
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 0 10px black;

  &:hover {
    border: 2px outset #ffc500;
  }
`