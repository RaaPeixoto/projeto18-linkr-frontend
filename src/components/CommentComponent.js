import { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import { UserContext } from '../contexts/UserContext';

export default function CommentComponent(props) {

    const { username, image, userCId, comment } = props;
    console.log(username, image, userCId, comment);

    const { user } = useContext(UserContext);
    const { userId } = user;

    return (        
        <Container>
            <CommentContainer>
                <img src={image} alt="User" />
                <TextofContainer>
                    <h2>
                        {username}
                        {(userCId === userId ? <span> • autor?</span> : "")}
                    </h2>
                    <p>{comment}</p>
                </TextofContainer>
            </CommentContainer>
            <Bar />
        </Container>
    )

}

const Container = styled.div`
    height: 200px;
`;

const CommentContainer = styled.div`
    display: flex;
    margin-top: 3%;
    margin-bottom: 3%;
`;

const TextofContainer = styled.div`
    padding-left: 2%;
    padding-top: 1.5%;

    h2{
        color: #F3F3F3;
        font-weight: 700;
        font-size: 16px;
        display: flex;
        align-items: center;

        span{
            font-weight: 400;
            color: #565656;
            font-size: 14px;
            margin-left: 7px;
        }
    }

    p{
        color: #ACACAC;
        font-weight: 400;
        font-size: 14px;
        margin-top: 5%;
    }


`

const Bar = styled.div`
    background-color: white;
    width: 95%;
    border: 1px solid #353535;
`;


