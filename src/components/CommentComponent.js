import { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import axios from "axios";
import { UserContext } from '../contexts/UserContext';
import { BASE_URL } from "../constants/url";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

export default function CommentComponent(props) {

    const { username, image, userCId, comment } = props;

    const [isFollowing, setIsFollowing] = useState(false);
    const navigate = useNavigate();

    const { user } = useContext(UserContext);
    const { userId } = user;

    const { config: token } = useContext(AuthContext);
    const config = { headers: { Authorization: `Bearer ${token}` } };

    useEffect(() => {
      
        const promise = axios.get(`${BASE_URL}/followers/${userCId}`, config);

        promise.then((res) => {

            if(res.data){
                setIsFollowing(true);
            }

        });

        promise.catch((error) => {
            console.log(error.message)
            console.log("n foi")
        });
    }, []);

    return (        
        <Container>
            <CommentContainer>
                <img src={image} alt="User" onClick={() => navigate(`/users/${userCId}`)}/>
                <TextofContainer>
                    <h2 onClick={() => navigate(`/users/${userCId}`)}>
                        {username}
                        {(userCId == userId ? <span> • post’s author</span> : "")}
                        {(isFollowing ? <span> • following</span> : "")}
                    </h2>
                    <p>{comment}</p>
                </TextofContainer>
            </CommentContainer>
            <Bar />
        </Container>
    )

}

const Container = styled.div`
`;

const CommentContainer = styled.div`
    display: flex;
    margin-top: 3%;
    margin-bottom: 3%;

    img{
        cursor: pointer;
    }
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
        cursor: pointer;

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


