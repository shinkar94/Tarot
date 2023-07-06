import React from 'react';
import recordImg from "../../img/icon/zapis.svg";
import Tariff from './Tariff'
import {MappedExtra} from "./Mapped/MappedExtra";
import {MappedBonus} from "./Mapped/MappedBonus";
import {MappedDescription} from "./Mapped/MappedDescription";
import styled from "styled-components";

export const MappedTariff = () => {
    const {tariffData} = Tariff
    return (
        <>
        {
            tariffData.map(tariff => {
                return(
                    <StTariffCard key={tariff.id}>
                        <h3>{tariff.name}</h3>
                        <p>{tariff.price}</p>
                        <p>Осталось {tariff.places} мест</p>
                        <img src={recordImg} alt="recordImg" className={'tariffImg'}/>
                        <h3>Оставить Заявку</h3>
                        <MappedDescription description={tariff.description}/>
                        {tariff.extra.length > 0 && <MappedExtra extraData={tariff.extra}/>}
                        {tariff.bonus.bonus_text.length > 0 && <MappedBonus bonus={tariff.bonus}/>}
                    </StTariffCard>
                )
            })
        }
        </>
    );
};

const StTariffCard = styled.div`
  .tariffImg{
    width: 10vw;
  }
`