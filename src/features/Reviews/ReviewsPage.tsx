import React from 'react';
import {ReviewsList} from "./ReviewsList";
import styled from "styled-components";

export const ReviewsPage = () => {
    return (
        <WrapperReviews>
            <button>Оставить отзыв</button>
            <ReviewsList />
        </WrapperReviews>
    );
};

const WrapperReviews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`