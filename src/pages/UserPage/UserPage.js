//import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import Post from "../../components/Post";
import ScreenBackgroundColor from "../../components/ScreenBackgroundColor";

export default function UserPage(props) {

    const a = 1;

    const { userId } = props;

    const [showCreatePost, setShowCreatePost] = useState(false);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const promise = axios.get(`${BASE_URL}/users/${userId}`);

        promise.then((res) => {
            setUserPosts(res.data);
            console.log(res.data);
        });

        promise.catch((error) => {
            console.log(error.message);
            setUserPosts([]);
        });
    }, []);

    return (
        <ScreenBackgroundColor userImage={a} titlePage={a} showCreatePost={showCreatePost} title="timeline">
            {/* {userPosts.map((info, index) => <Post />)} */}
            <Post />
            <Post />
            <Post />
        </ScreenBackgroundColor>
    )
}