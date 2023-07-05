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
                {paragraph.map(el => <p>{el}</p>)}
                <h3>{program_description}</h3>
            </div>
        </StWorkFormat>
    );
});

const StWorkFormat = styled.div`
  .format-img{
    & img{
      width: 10vw;
    }
  }
`
