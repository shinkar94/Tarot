import React from 'react';
import '../App.css';
import {Header} from "../features/Header/Header";
import {ThemeProvider} from "styled-components";
import Theme from './ThemeData'
import {InfoTarot} from "../features/InfoTarot/InfoTarot";
function App() {
  return (
    <div className="App">
        <ThemeProvider theme={Theme}>
            <Header />
            <InfoTarot />
        </ThemeProvider>
    </div>
  );
}

export default App;
