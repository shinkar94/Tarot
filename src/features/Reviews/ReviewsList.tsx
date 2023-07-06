import React from 'react';
import styled from "styled-components";
import userIcon from "../../img/icon/user.svg";
import Reviews from './Reviews'

export const ReviewsList = () => {
    const {reviews_data} = Reviews
    return (
        <StReviewsList>
            {reviews_data.map(rev => {
                return(
                    <div className={'list_block'} key={rev.id}>
                        <img src={userIcon} alt="userIcon"/>
                        <h4>{rev.name}</h4>
                        <p>{rev.message}</p>
                    </div>
                )
            })}
        </StReviewsList>
    );
};

const StReviewsList = styled.div`
  & img{
    width: 4vw;
  }
  & h4, p{
    margin: 2px;
  }
`