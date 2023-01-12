import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { COLORS } from "../constants/layoutConstants";
import { BASE_URL } from "../constants/url";
import { AuthContext } from "../contexts/AuthContext";

export default function ButtonFollow({ userId }) {
  const { config: token } = useContext(AuthContext);
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const [isFollowing, setIsFollowing] = useState(null);
  // console.log(isFollowing);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/followers/${userId}`, config)
      .then((res) => {
        if (res.data === "") setIsFollowing(false);
        else setIsFollowing(true);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <Button isFollowing={isFollowing}>
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}

const Button = styled.button`
  background: ${({isFollowing}) => isFollowing ? COLORS.text : COLORS.button};
  color: ${({isFollowing}) => isFollowing ? COLORS.button : COLORS.text};
  min-width: 55px;
  width: 10vw;
  height: 31px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  border: none;
  border-radius: 5px;
`;
