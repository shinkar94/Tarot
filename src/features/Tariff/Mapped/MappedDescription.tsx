import React, {FC} from 'react';
import {DescriptionType} from "../Tariff";
import styled from "styled-components";

type MappedDescriptionType = {
    description: DescriptionType[]
}

export const MappedDescription:FC<MappedDescriptionType> = ({description}) => {
    return (
        <DescriptionCard>
            {
                description.map(desc => {
                    return(
                        desc.status !== 'card'
                            ? <p key={desc.id}><img src={desc.icon} alt="iconDesc"/>{desc.text}</p>
                            : <h3 key={desc.id}><img src={desc.icon} alt="iconDesc"/>{desc.text}</h3>
                    )

                })
            }
        </DescriptionCard>
    );
};

const DescriptionCard = styled.div`
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