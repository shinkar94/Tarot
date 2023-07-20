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
            <div className={'containerBody'}>
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
            </div>

            <WorkFormat format_date={data_programme.format_date}/>
        </StProgrammeBody>
    );
});

const StProgrammeBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .containerBody{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .bodyImgBlock{
      text-align: center;
      max-width: 300px;
      & img{
        width: 10vw;
      }
      & h3{
        font-family: kamerik-205-heavy,serif;
        color: var(--global-color);
      }
      & p{
        font-family: merriweather-italic, serif;
      }
    }
  }
  
`