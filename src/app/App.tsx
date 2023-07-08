import React from 'react';
import '../App.css';
import {Header} from "../features/Header/Header";
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import Theme, {ThemeType} from './ThemeData'
import {InfoTarot} from "../features/InfoTarot/InfoTarot";
import {TransitionLine} from "../common/TransitionLine";
import {Programme} from "../features/Programm/Programme";
import {TariffPlan} from "../features/Tariff/TariffPlan";
import {ReviewsPage} from "../features/Reviews/ReviewsPage";
import {AllInfos} from "../features/AllInfos/AllInfos";
import {Footer} from "../features/Footer/Footer";
import {observer} from "mobx-react-lite";

const GlobalStyle = createGlobalStyle<{$overflow: string}>`
      body {
        padding: 0;
        margin: 0;
        border: 0;
        background: linear-gradient(to right, #FFFFFF, #FFEFBA);
        overflow: ${props => props.$overflow};
      }
`;
export const App = observer(() => {
    const theme: ThemeType = Theme.theme
    const overflow = Theme.theme.overflow
    return (
        <Wrapper $overflow={overflow}>
            <ThemeProvider theme={theme}>
                <GlobalStyle $overflow={overflow}/>
                <Header/>
                <InfoTarot/>
                <TransitionLine nameLine={'Программа'}/>
                <Programme/>
                <TransitionLine nameLine={'Тарифы'}/>
                <TariffPlan/>
                <TransitionLine nameLine={'Отзывы'}/>
                <ReviewsPage/>
                <AllInfos/>
                <Footer/>
            </ThemeProvider>
        </Wrapper>
    );
})

const Wrapper = styled.div<{$overflow: string}>`
  overflow: ${props => props.$overflow};
  
`
