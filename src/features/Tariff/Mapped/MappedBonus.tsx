import React, {FC} from 'react';
import {BonusType} from "../Tariff";
import styled from "styled-components";

type MappedBonusType = {
    bonus: BonusType
}

export const MappedBonus:FC<MappedBonusType> = ({bonus}) => {
    return (
        <StBonusCard>
            <h2>{bonus.title}</h2>
            {bonus.bonus_text.map(text => {
                return(
                    <p key={text.id}><img src={text.icon} alt="bonusIcon"/>{text.text}</p>
                )
            })}
        </StBonusCard>
    );
};

const StBonusCard = styled.div`
  & > p,h3{
    margin: 4px;
    font-size: var(--index);
    cursor: pointer;
  }
  & > p:hover{
    background: #B34D36;
    color: white;
    border-radius: 5px;
  }
  & img{
    width: 1.3vw;
  }
`