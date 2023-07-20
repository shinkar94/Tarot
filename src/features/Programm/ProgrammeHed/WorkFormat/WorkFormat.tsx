import React, {FC} from 'react';
import styled from "styled-components";
import checkListImg from '../../../../img/icon/checklist.svg'
import {observer} from "mobx-react-lite";
import {FormatData} from "../../ProgrammeData";

interface WorkFormatType {
    format_date: FormatData
}

export const WorkFormat:FC<WorkFormatType> = observer(({format_date}) => {
    const {program_description, paragraph} = format_date
    return (
        <StWorkFormat>
            <div className="format-img"><img src={checkListImg} alt="checkListImg"/></div>
            <div className="format-title"><h3>Формат работы:</h3></div>
            <div className="format-description">
                <p className="chat-tel">ЧАТ В TELEGRAM</p>
                {paragraph.map((el, index) => <p key={index} className={'tel-info'}>{el}</p>)}
                <p className={'tel-desc'}>{program_description}</p>
            </div>
        </StWorkFormat>
    );
});

const StWorkFormat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 5px 10px gray;
  max-width: 80vw;
  border-radius: 10px;

  .format-img {
    & img {
      width: 10vw;
    }
  }

  .format-title {
    & h3 {
      font-family: kamerik-205-heavy, sans-serif;
      color: var(--global-color);
      margin: 2px;
    }
  }

  .format-description {
    .chat-tel {
      color: white;
      font-weight: bold;
      font-size: calc(var(--index) * 1.5);
      background: linear-gradient(90deg, #C13764, #1F2671);
    }

    .tel-info {
      font-family: kamerik-205-heavy, sans-serif;
      margin: 2px;
    }

    .tel-desc {
      font-family: merriweather-italic, sans-serif;
      background: #cb4418;
      margin: 10px 0 0 0;
      border-radius: 0 0 10px 10px;
      color: #ffffff;
    }
  }
`
