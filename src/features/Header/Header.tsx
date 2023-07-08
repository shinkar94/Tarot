import React from 'react';
import styled from "styled-components";
import calendarImg from '../../img/icon/calend.png'
import {MenuCollapsed} from "./MenuCollapsed";

export const Header = () => {
    return (
        <StHeader>
            <div className="btn_calendar">
                <a href="#modalcal" className="modalcal"><img src={calendarImg} alt="calendarImg" /></a>
            </div>
            <MenuCollapsed />
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
`
