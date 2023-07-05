import React from 'react';
import styled from "styled-components";
import AuthorImg from '../../img/Avtor.png'

export const InfoTarot = () => {
    return (
        <InfoBlock>
            <div className="log_img"><img src={AuthorImg} alt="AuthorImg"/></div>
            <div className="header-text">
                <div className="shadow_hed"></div>
                <div className="back_img"></div>
                <h1 className="header-h1">Пробуждение</h1>
                <p className="header-p">Серия мероприятий, направленных на раскрытие Вашего потенциала.Объединение людей
                    со схожей потребностью для достижения желаемых результатов.</p>
                <p className="header-p">Обучу чтению карт и работе с Таро в увлекательной игровой форме за 1 месяц.
                    Материалы и доступ в закрытый чат с единомышленницами останутся с тобой навсегда.</p>
                <p className="header-p">Разбуди свой финансовый потенциал за 3 недели
                    с помощью работы с подсознанием, карт Таро и нумерологии.
                    Диагностическая консультация -<span className="sp-hed">БЕСПЛАТНО!!</span></p>
                <span className="reg-buttom"><a href="#modalca" className="modalca zapp">Записаться на консультацию</a></span>
            </div>
        </InfoBlock>
    );
};

const InfoBlock = styled.div`
  display: flex;
`
