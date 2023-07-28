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
  & > h2{
    font-size: var(--index);
    text-align: center;
    background: linear-gradient(90deg, #C13764, #1F2671);
    color: white;
  }
  & > h3{
    background-image: linear-gradient(90deg, #f25d19, #af1523);
    color: white;
    font-family: merriweather-italic, sans-serif;
    padding: 2px;
    border-radius: 5px;
  }
  & > p,h3{
    margin: 4px;
    font-size: var(--index);
    cursor: pointer;
  }
  & > p{
    font-family: merriweather-italic, sans-serif;
    padding: 2px;
  }
  & > p:hover{
    background: #B34D36;
    color: white;
    border-radius: 5px;
  }
  & img{
    width: 1.3vw;
    margin-right: 3px;
  }
`
