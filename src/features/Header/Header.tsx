import React from 'react';
import styled from "styled-components";
import calendarImg from '../../img/icon/calend.png'

export const Header = () => {
    return (
        <StHeader>
            <div className="btn_calendar">
                <a href="#modalcal" className="modalcal"><img src={calendarImg} alt="calendarImg" /></a>
            </div>
            <div className="menu-collapsed">
                <div className="bar"></div>
                <nav>
                    <ul>
                        <li><a href="#link-program">Программа</a></li>
                        <li><a href="#modalcal" className="modalcal">Календарь</a></li>
                        <li><a href="#link-prising">Тарифы</a></li>
                        <li><a href="#link-author">Об авторе</a></li>
                        <li><a href="#link-feedback">Отзывы</a></li>
                        <li><a href="#link-faq">Ответы на вопросы</a></li>
                        <li><a href="#link-contact">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </StHeader>
    );
};

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  .btn_calendar{
    
  }
  .menu-collapsed{
    nav{
      ul{
        display: flex;
        gap: 5px;
        margin: 0;
        padding: 0;
        list-style-type: none;
        li{
          a{
            text-decoration: none;
            font-size: 22px;
            color: #b34d36;
            font-weight: bold;
            font-family: "Merriweather",serif;
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`
