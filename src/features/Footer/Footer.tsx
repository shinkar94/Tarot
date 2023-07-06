import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <StFooter>
            <div className={'Contact'}>
                <p>Почта: milatarot21@gmail.com</p>
                <p>Инстаграм: mila</p>
                <p>Телеграм: mila</p>
            </div>
            <div className={'IP'}>
                <p>Самозанятый</p>
                <p>Тарот Мила Викторовна</p>
                <p>ИНН 34661201297912</p>
            </div>
            <div className={'docs'}>
                <p>Политика конедициальности</p>
                <p>Договор оферты</p>
            </div>
        </StFooter>
    );
};

const StFooter = styled.div`
  display: flex;
`