import React from 'react';
import styled from "styled-components";
import AuthorImg from '../../img/Author.png'
import BackImg from '../../img/topim.jpg'

export const InfoTarot = () => {
    return (
        <InfoBlock>
            <div className="log_img"><img src={AuthorImg} alt="AuthorImg"/></div>
            <div className="header-text">
                <div className="back_img">
                    <div className={"img_back"}></div>
                    <div className={"img_shadow"}></div>
                </div>
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
  position: relative;
  display: flex;

  .back_img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    z-index: -1;
    border-radius: 10vw 50vw 3vw 50vw;
    overflow: hidden;
    .img_back {
      width: 100%;
      height: 100%;
      background-image: url(${BackImg});
      background-size: cover;
      background-position: center center;
    }

    .img_shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background: rgba(229, 214, 183, 0.63);
    }
  }
`
