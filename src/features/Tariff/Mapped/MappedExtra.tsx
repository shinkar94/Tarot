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
  & img{
    width: 1.3vw;
  }
`
