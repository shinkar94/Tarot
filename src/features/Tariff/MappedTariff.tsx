import React from 'react';
import recordImg from "../../img/icon/zapis.svg";
import Tariff from './Tariff'
import {MappedExtra} from "./Mapped/MappedExtra";
import {MappedBonus} from "./Mapped/MappedBonus";
import {MappedDescription} from "./Mapped/MappedDescription";
import styled, {css} from "styled-components";
import {useWindowSize} from "../../assets/helper/useWindowSize";

export const MappedTariff = () => {
    const {tariffData} = Tariff
    const size = useWindowSize()
    return (
        <>
        {
            tariffData.map(tariff => {
                return(
                    <StTariffCard key={tariff.id} $color={tariff.id} $size={size}>
                        <div className="cardHead">
                            <h3>{tariff.name}</h3>
                            <p>{tariff.price}</p>
                            <p>Осталось {tariff.places} мест</p>
                            <img src={recordImg} alt="recordImg" className={'tariffImg'}/>
                            <h3>Оставить Заявку</h3>
                        </div>
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

const StTariffCard = styled.div<{$color:number, $size:number}>`
  min-width: 300px;
  max-width: 20vw;
  box-shadow: 0 5px 10px gray;
  border-radius: 10px;
  ${(props) => props.$size < 1000 && css`
    margin-top: 10px;
  `}

  .cardHead {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px 10px 0 0;
    padding: 4px;
    color: #ffffff;
    text-shadow: 0 1px black;

    & > h3 {
      margin: 0;
      font-size: var(--index * 1.2);
      font-family: merriweather-italic, sans-serif;
    }

    & > p {
      margin: 0;
      font-size: calc(var(--index));
      font-family: kamerik-205-heavy, sans-serif;
    }

    ${({$color}) => $color === 1
            ? css`background: linear-gradient(45deg, #89CFEB, #415dd2);`
            : $color === 2
                    ? css`background: linear-gradient(45deg, #D4C54F, #968B35);`
                    : css`background: linear-gradient(45deg, #F5A69F, #FE6549);`
    }
  }

  .tariffImg {
    width: 10vw;
    cursor: pointer;
  }
`