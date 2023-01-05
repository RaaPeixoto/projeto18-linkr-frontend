//import styled from "styled-components";
import { useState, useEffect } from 'react';
import Post from "../../components/Post";
import ScreenBackgroundColor from "../../components/ScreenBackgroundColor";

export default function UserPage(){

    const [ showCreatePost, setShowCreatePost] = useState(false);

        // useEffect(() => {
    //     const promise = axios.get(``);

    //     promise.then((res) => );

    //     promise.catch((error) =>);
    // }, []) //get

    return(
        <ScreenBackgroundColor showCreatePost={showCreatePost} title="timeline">
        <Post />
        <Post />
        <Post />
      </ScreenBackgroundColor>
    )
}