import React from 'react';
import styled from "styled-components";
import {ActiveSpan} from "../../../common/span/activeSpan";

export const ProgrammeHed = () => {
    return (
        <StProgrammeHed>
            <h2 className="program-h2">Вверх по лестнице финансов</h2>
            <p className="program-p">Комплексная работа с состоянием, страхами, выгодами.</p>
            <div className="program-event-detali">
                <p>Старт <ActiveSpan name={'3 июля'} /></p>
                <p>Продолжительность <ActiveSpan name={'3 недели'} /></p>
            </div>
        </StProgrammeHed>
    );
};

const StProgrammeHed = styled.div`
  .program-h2 {
    font-family: kamerik-205-heavy, serif;
    font-size: calc(var(--index) * 2.2);
    text-align: center;
    color: transparent;
    background-image: linear-gradient(to bottom, #f25d19, #af1523);
    -webkit-background-clip: text;
    background-clip: text;
    margin: 0;
  }

  .program-p {
    font-family: merriweather-italic, serif;
    font-size: calc(var(--index));
    text-align: center;
    margin: 0;
  }
  .program-event-detali{
    display: flex;
    justify-content: center;
    gap: 10px;
    font-family: merriweather-italic, serif;
    font-size: calc(var(--index));
  }
`
