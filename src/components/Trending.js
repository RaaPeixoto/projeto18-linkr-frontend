import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { COLORS, FONTS } from "../constants/layoutConstants";
import { MEDIA_QUERIES } from "../constants/mediaQueries";
import { BASE_URL } from "../constants/url";
import { AuthContext } from "../contexts/AuthContext";

export default function Trending({reloadPosts}) {
  const navigate = useNavigate();
  const [hashtags, setHashtags] = useState([]); 
   const { config: token } = useContext(AuthContext);
    const config = { headers: { Authorization: `Bearer ${token}` } };
  useEffect(() => {
  

    axios
      .get(`${BASE_URL}/trending`, config)
      .then((res) => {
        setHashtags(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reloadPosts]);

  return (
    <TrendingConteiner>
      <h1>trending</h1>
      <Line></Line>
      {hashtags.map((hash) => {
        const { id, name,count } = hash;
        return (
          
            <h2 onClick={()=>navigate(`/hashtag/${name.replace("#","")}`)}>{name}</h2>
        
        );
      })}
    </TrendingConteiner>
  );
}

const TrendingConteiner = styled.div`
  width: 23vw;
  height: 406px;
  background-color: ${COLORS.trending};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 25px;
  padding: 9px 0px 12px 0px;
  border-radius: 16px;

  @media (${MEDIA_QUERIES.mobile}) {
    display: none;
  }

  h1 {
    color: ${COLORS.text};
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    padding-left: 16px;
  }

  h2 {
    color: ${COLORS.text};
    font-family: ${FONTS.text};
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    padding-left: 16px;
    margin-bottom: 10px;
  }
`;
const Line = styled.div`
  width: 23vw;
  height: 0px;
  border: 1px solid #484848;
  margin-bottom: 22px;
`;
