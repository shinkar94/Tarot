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
  & img{
    width: 1.3vw;
  }
`