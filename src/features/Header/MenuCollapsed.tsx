import React, {useState} from 'react';
import burger from "../../img/icon/burger.svg";
import styled, {css} from "styled-components";
import ThemeData from "../../app/ThemeData";
import {observer} from "mobx-react-lite";

export const MenuCollapsed = observer(() => {
    const [openCollapsed, setOpenCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setOpenCollapsed(!openCollapsed)
        if(ThemeData.theme.overflow === 'auto'){
            ThemeData.stopOverflow('hidden')
        }else{
            ThemeData.stopOverflow('auto')
        }
    }
    return (
        <StMenu $test={openCollapsed}>
            <div className="bar" onClick={toggleCollapsed}>
                <img src={burger} alt="burger_menu"/>
            </div>
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
        </StMenu>
    );
});
const StMenu = styled.div<{ $test: boolean }>`
  .bar {
    display: none;
    ${props => props.theme.point.tablet} {
      display: inline;
      position: absolute;
      top: 4px;
      right: 4px;
      z-index: 2;
      & img {
        width: 50px;
      }
    }
  }

  nav {
    ul {
      display: flex;
      gap: 5px;
      margin: 0;
      padding: 0;
      list-style-type: none;

      li {
        a {
          text-decoration: none;
          font-size: 22px;
          color: #b34d36;
          font-weight: bold;
          font-family: "Merriweather", serif;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    ${props => props.theme.point.tablet} {
      ul {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        ${props => !props.$test && css`
          display: none;
        `}
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        background: rgba(0, 0, 0, 0.92);
        gap: 5px;
        margin: 0;
        padding: 0;
        list-style-type: none;

        li {
          a {
            text-decoration: none;
            font-size: 7vw;
            color: #b34d36;
            font-weight: bold;
            font-family: "Merriweather", serif;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`