import React from 'react';
import styled from "styled-components";
import AuthorImg from '../../img/aftor2.png'
import BackImg from '../../img/topim.jpg'
import {Button} from "../../common/button/button";
import {ActiveSpan} from "../../common/span/activeSpan";

export const InfoTarot = () => {
    const openConsultation = () => {
        console.log('test')
    }
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
                    Диагностическая консультация -<ActiveSpan name={'Бесплатно!!'}/></p>
                <div className={'container-btn'}>
                    <Button name={'Записаться на консультацию'} callBack={openConsultation}/>
                </div>
            </div>
        </InfoBlock>
    );
};

const InfoBlock = styled.div`
  position: relative;
  display: flex;
  padding: 0 20px;
  .log_img {
    & img {
      max-width: 200px;
    }
  }

  .header-text {
    .back_img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100vw;
      z-index: -1;
      border-radius: 10vw 35vw 3vw 50vw;
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
        background: rgba(229, 214, 183, 0.83);
      }
    }
    .header-h1 {
      font-family: kamerik-205-heavy, serif;
      font-size: calc(var(--index) * 2.5);
      text-align: center;
      color: transparent;
      background-image: linear-gradient(to bottom, #f25d19, #af1523);
      -webkit-background-clip: text;
      background-clip: text;
    }
    .header-p {
      font-size: calc(var(--index) * 1.2);
      font-family: merriweather-italic, serif;
      color: #660000;
    }
    .container-btn {
      display: flex;
      justify-content: flex-end;
      padding-right: 5vw;
    }
  }
`
