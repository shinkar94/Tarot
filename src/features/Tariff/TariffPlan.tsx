import React from 'react';
import styled from "styled-components";
import {MappedTariff} from "./MappedTariff";

export const TariffPlan = () => {
    return (
        <ContainerTariff>
            <MappedTariff />
        </ContainerTariff>
    );
};
const ContainerTariff = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`