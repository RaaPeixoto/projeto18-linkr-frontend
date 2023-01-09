//import styled from "styled-components";
import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import Post from "../../components/Post";
import ScreenBackgroundColor from "../../components/ScreenBackgroundColor";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from 'react-router';

export default function UserPage(props) {

    const {userId} = useParams();

    const [showCreatePost, setShowCreatePost] = useState(false);
    const [userPosts, setUserPosts] = useState([]);

    const {config} = useContext(AuthContext);
    
    const auth = {
        headers: { Authorization: `Bearer ${config}` },
      };

    useEffect(() => {
        const promise = axios.get(`${BASE_URL}/users/${userId}`, auth);

        promise.then((res) => {
            setUserPosts(res.data);
            console.log(res.data[0].username);
            console.log(res.data[0].image);
            console.log(res.data[0].userId);
            console.log(res.data[0].link);
            console.log(res.data[0].description);
            console.log(res.data);
        });

        promise.catch((error) => {
            console.log(error.message);
            setUserPosts([]);
        });
    }, []);

    return (
        <ScreenBackgroundColor userImage={userPosts[0].image} titlePage={userPosts[0].username} showCreatePost={showCreatePost} title="timeline">
            {/* {userPosts.map((info, index) => <Post />)} */}
            <Post />
            <Post />
            <Post />
        </ScreenBackgroundColor>
    )
}