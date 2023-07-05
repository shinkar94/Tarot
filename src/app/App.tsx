import React from 'react';
import '../App.css';
import {Header} from "../features/Header/Header";
import {ThemeProvider} from "styled-components";
import Theme from './ThemeData'
import {InfoTarot} from "../features/InfoTarot/InfoTarot";
import {TransitionLine} from "../common/TransitionLine";
import {Programme} from "../features/Programm/Programme";
function App() {
  return (
    <div className="App">
        <ThemeProvider theme={Theme}>
            <Header />
            <InfoTarot />
            <TransitionLine nameLine={'Программа'}/>
            <Programme />
        </ThemeProvider>
    </div>
  );
}

export default App;
