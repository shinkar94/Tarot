import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import userIcon from "../../img/icon/user.svg";
import Reviews from './Reviews'

export const ReviewsList = () => {
    const {reviews_data} = Reviews
    const [review, setReviews] = useState(reviews_data[0])
    useEffect(() => {
        let start = 1
        const interval = setInterval(() => {
            start = (start + 1) % reviews_data.length;
            setReviews(reviews_data[start])
            start++
        }, 10000)
        return () => clearInterval(interval);
    }, [reviews_data])
    return (
        <StReviewsList>
            <div className={'carusel'}>
                <div className={'list_block'} >
                    <img src={userIcon} alt="userIcon"/>
                    <h4>{review.name}</h4>
                    <p>{review.message}</p>
                </div>
            </div>

        </StReviewsList>
    );
};

const StReviewsList = styled.div`
  display: flex;
  margin-top: 10px;

  .carusel {
    display: flex;
    min-width: 300px;
    max-width: 500px;
    min-height: 300px;
    box-shadow: 0 0 4px 4px gray;
    border-radius: 5px;
    overflow: hidden;

    .list_block {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 280px;
      padding-left: 10px;
    }

    & img {
      width: 4vw;
    }

    & h4, p {
      margin: 2px;
    }
  }

`