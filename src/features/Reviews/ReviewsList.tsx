import React from 'react';
import styled from "styled-components";
import userIcon from "../../img/icon/user.svg";
import Reviews from './Reviews'

export const ReviewsList = () => {
    const {reviews_data} = Reviews
    return (
        <StReviewsList>
            <div className={'carusel'}>
                {reviews_data.map(rev => {
                    return(
                        <div className={'list_block'} key={rev.id}>
                            <img src={userIcon} alt="userIcon"/>
                            <h4>{rev.name}</h4>
                            <p>{rev.message}</p>
                        </div>
                    )
                })}
            </div>

        </StReviewsList>
    );
};

const StReviewsList = styled.div`
  display: flex;
  .carusel{
    display: flex;
    width: 300px;
    background: #B34D36;
    overflow: hidden;
    .list_block{
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 280px;
      padding-left: 10px;
    }
    & img{
      width: 4vw;
    }
    & h4, p{
      margin: 2px;
    }
  }
  
`