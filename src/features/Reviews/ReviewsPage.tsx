import React from 'react';
import {ReviewsList} from "./ReviewsList";
import styled from "styled-components";
import {Button} from "../../common/button/button";

export const ReviewsPage = () => {
    const openReviews = () =>{
        //open form
    }
    return (
        <WrapperReviews>
            <Button name={'Оставить отзыв'} callBack={openReviews}/>
            <ReviewsList />
        </WrapperReviews>
    );
};

const WrapperReviews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`