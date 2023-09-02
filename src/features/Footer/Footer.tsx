import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <StFooter>
            <div className={'Contact'}>
                <p>Почта: <span>milatarot21@gmail.com</span></p>
                <p>Инстаграм: <span>mila</span></p>
                <p>Телеграм: <span>mila</span></p>
            </div>
            <div className={'IP'}>
                <p>Самозанятый</p>
                <p>Тарот Мила Викторовна</p>
                <p>ИНН 34661201297912</p>
            </div>
            <div className={'docs'}>
                <p><span>Политика конедициальности</span></p>
                <p><span>Договор оферты</span></p>
            </div>
        </StFooter>
    );
};

const StFooter = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 0 -5px 5px #6c6c6c;
  & span{
    color: #B34D36;
    font-size: 24px;
  }
  & p{
    margin: 2px;
  }
`