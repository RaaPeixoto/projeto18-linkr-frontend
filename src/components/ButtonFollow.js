import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";

import { COLORS } from "../constants/layoutConstants";
import { BASE_URL } from "../constants/url";
import { AuthContext } from "../contexts/AuthContext";

export default function ButtonFollow({ userId }) {
  const navigate = useNavigate();

  const { config: token } = useContext(AuthContext);
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const [isFollowing, setIsFollowing] = useState(null);
  const [theButtonWasClicked, setTheButtonWasClicked] = useState(false);

  useEffect(reloadButtonStatus, []);

  function reloadButtonStatus() {
    axios
      .get(`${BASE_URL}/followers/${userId}`, config)
      .then((res) => {
        if (res.data === "") setIsFollowing(false);
        else setIsFollowing(true);
      })
      .catch((error) => {
        console.log(error.response);

        if (error.response?.status === 401) {
          localStorage.clear();
          navigate("/");
          return;
        }
      });
  }

  function followUser() {
    setTheButtonWasClicked(true);

    axios
      .post(`${BASE_URL}/followers`, { followingUserId: userId }, config)
      .then((res) => reloadButtonStatus(), setTheButtonWasClicked(false))
      .catch((error) => {
        setTheButtonWasClicked(false);

        if (error.response?.status === 401) {
          localStorage.clear();
          navigate("/");
          return;
        }

        swal(
          "Unable to perform the operation",
          `${error.response.data.message}`
        );
      });
  }

  function unfollowUser() {
    setTheButtonWasClicked(true);

    axios
      .delete(`${BASE_URL}/followers/${userId}`, config)
      .then((res) => reloadButtonStatus(), setTheButtonWasClicked(false))
      .catch((error) => {
        setTheButtonWasClicked(false);

        if (error.response?.status === 401) {
          localStorage.clear();
          navigate("/");
          return;
        }

        swal(
          "Unable to perform the operation",
          `${error.response.data.message}`
        );
      });
  }

  return (
    <Button
      isFollowing={isFollowing}
      onClick={isFollowing ? unfollowUser : followUser}
      disabled={theButtonWasClicked}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}

const Button = styled.button`
  background: ${({ isFollowing }) =>
    isFollowing ? COLORS.text : COLORS.button};
  color: ${({ isFollowing }) => (isFollowing ? COLORS.button : COLORS.text)};
  min-width: 65px;
  width: 10vw;
  height: 31px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  border: none;
  border-radius: 5px;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;
