import React from 'react';
import boardImg from "../../../img/icon/board.svg";
import boardTwoImg from "../../../img/icon/board-two.svg";
import successImg from "../../../img/icon/success.svg";
import styled from "styled-components";
import {WorkFormat} from "../ProgrammeHed/WorkFormat/WorkFormat";
import {observer} from "mobx-react-lite";
import DataProgramme from "../ProgrammeData";

export const ProgrammeBody = observer(() => {
    const {data_programme} = DataProgramme
    return (
        <StProgrammeBody>
            <div className="bodyImgBlock">
                <img src={boardImg} alt="programmeImage"/>
                <h3>НЕДЕЛЯ 1</h3>
                <p>{data_programme.week_data.first}</p>
            </div>
            <div className="bodyImgBlock">
                <img src={boardTwoImg} alt="programmeImage"/>
                <h3>НЕДЕЛЯ 2</h3>
                <p>{data_programme.week_data.second}</p>
            </div>
            <div className="bodyImgBlock">
                <img src={successImg} alt="programmeImage"/>
                <h3>НЕДЕЛЯ 3</h3>
                <p>{data_programme.week_data.third}</p>
            </div>
            <WorkFormat format_date={data_programme.format_date}/>
        </StProgrammeBody>
    );
});

const StProgrammeBody = styled.div`
  .bodyImgBlock{
    & img{
      width: 10vw;
    }
  }
`