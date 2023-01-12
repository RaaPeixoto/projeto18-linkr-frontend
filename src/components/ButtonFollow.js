import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { COLORS } from "../constants/layoutConstants";
import { BASE_URL } from "../constants/url";
import { AuthContext } from "../contexts/AuthContext";

export default function ButtonFollow({ userId }) {
  const { config: token } = useContext(AuthContext);
  const config = { headers: { Authorization: `Bearer ${token}` } };
console.log(userId)
  const [infoFollowing, setInfoFollowing] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/followers/${userId}`, config)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Button>Follow</Button>;
}

const Button = styled.button`
  background: ${COLORS.button};
  color: ${COLORS.text};
  min-width: 55px;
  width: 10vw;
  height: 31px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  border: none;
  border-radius: 5px;
`;
