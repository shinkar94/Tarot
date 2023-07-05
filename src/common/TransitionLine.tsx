import React, {FC} from 'react';
import styled from "styled-components";

type TransitionLineType = {
    nameLine: string
}

export const TransitionLine:FC<TransitionLineType> = ({nameLine}) => {
    return (
        <StTransition>
            <div className={'line'}></div>
            <p>{nameLine}</p>
            <div className={'line'}></div>
        </StTransition>
    );
};

const StTransition = styled.div`
  display: flex;
  align-items: center;
  & p{
    width: 20%;
    text-align: center;
  }
  .line{
    height: 2px;
    width: 45vw;
    background: black;
  }
`