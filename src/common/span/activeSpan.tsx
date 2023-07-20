import React, {FC} from 'react';
import styled from "styled-components";

type Props ={
    name: string
}
export const ActiveSpan:FC<Props> = ({name}) => {
    return (
        <StSpan>{name}</StSpan>
    );
};

const StSpan = styled.span`
  padding: 0.1rem;
  border-radius: 0.3rem;
  background: linear-gradient(to right, #F45F16,#E74856, #E8182A);
  text-transform: uppercase;
  font-weight: 500;
  color: aliceblue;
  font-family: kamerik-205-heavy,serif;
`
