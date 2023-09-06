import React from 'react';
import styled, {css} from "styled-components";
import {useWindowSize} from "../../assets/helper/useWindowSize";

export const Footer = () => {
    const size = useWindowSize()
    return (
        <StFooter $size={size}>
            <div className={'Contact block-info'}>
                <p>Почта: <span>milatarot21@gmail.com</span></p>
                <p>Инстаграм: <span>mila</span></p>
                <p>Телеграм: <span>mila</span></p>
            </div>
            <div className={'IP block-info'}>
                <p>Самозанятый</p>
                <p>Тарот Мила Викторовна</p>
                <p>ИНН 34661201297912</p>
            </div>
            <div className={'docs block-info'}>
                <p><span>Политика конедициальности</span></p>
                <p><span>Договор оферты</span></p>
            </div>
        </StFooter>
    );
};

const StFooter = styled.div<{$size: number}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-shadow: 0 -5px 5px #6c6c6c;
  .block-info{
    ${(props) => props.$size < 1000 && css`
      text-align: center;
      width: 100%;
    `}
  }
  & span{
    color: #B34D36;
    font-size: 24px;
  }
  & p{
    margin: 2px;
  }
`