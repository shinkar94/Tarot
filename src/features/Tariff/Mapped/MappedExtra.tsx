import React, {FC} from 'react';
import {ExtraType} from "../Tariff";
import styled from "styled-components";

type MappedExtraType = {
    extraData: ExtraType[]
}

export const MappedExtra:FC<MappedExtraType> = ({extraData}) => {
    return (
        <ExtraCard>
            <h2>ДОПОЛНИТЕЛЬНО:</h2>
            {extraData.map(extra => {
                return(
                    extra.status != 'card'
                        ? <p key={extra.id}><img src={extra.icon} alt="iconExtra"/>{extra.text}</p>
                        : <h3 key={extra.id}><img src={extra.icon} alt="iconExtra"/>{extra.text}</h3>
                )

            })}
        </ExtraCard>
    );
};

const ExtraCard = styled.div`
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
