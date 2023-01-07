import styled from "styled-components";
import { COLORS } from "../constants/layoutConstants";
import { BASE_URL } from "../constants/url";
import { IoMdSearch } from "react-icons/io";
import { DebounceInput } from "react-debounce-input";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { MEDIA_QUERIES } from "../constants/mediaQueries";

export default function SearchBar() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [users, setUsers] = useState([]);

    const { config } = useContext(AuthContext);

    const auth = {
        headers: { Authorization: `Bearer ${config}` },
    };

    function catchUsers(e) {
        e.preventDefault();

        const promise = axios.get(`${BASE_URL}/search?username=${username}`, auth);

        promise.then((res) => {
            console.log(res.data);
            setUsers(res.data);
        });

        promise.catch((error) => {
            console.log(error.message);
            setUsers([]);
        });
    }

    function searchResult(username, users) {

        if (users) {
            return (
                //users.map((info, index) =>);
                <ResultsContainer>
                    <img
                        src={users[0].image}
                        alt="Imagem do Usuário"
                        onClick={() => navigate(`/users/${users[0].id}`)}
                    />
                    <p onClick={() => navigate(`/users/${users[0].id}`)}>{users[0].username}</p>
                </ResultsContainer>
            )
        }

    }

    return (
        <Container>
            <SearchIconContainer>
                <SearchInput
                    placeholder="Search for people and friends"
                    value={username}
                    minLength={3}
                    debounceTimeout={300}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        catchUsers(e);
                    }}
                />

                <IoMdSearch className="icon" type="submit" />
            </SearchIconContainer>
            <Result>
                {searchResult}
                <ResultsContainer>
                    <img
                        src=""
                        alt="Imagem do Usuário"
                        onClick={() => navigate(`/users/:id`)}
                    />
                    <p onClick={() => navigate(`/users/:id`)}>banana</p>
                </ResultsContainer>

                <ResultsContainer>
                    <img
                        src=""
                        alt="Imagem do Usuário"
                        onClick={() => navigate(`/users/:id`)}
                    />
                    <p onClick={() => navigate(`/users/:id`)}>banana</p>
                </ResultsContainer>

                <ResultsContainer>
                    <img
                        src=""
                        alt="Imagem do Usuário"
                        onClick={() => navigate(`/users/:id`)}
                    />
                    <p onClick={() => navigate(`/users/:id`)}>banana</p>
                </ResultsContainer>

            </Result>
        </Container>
    )

}

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    position: fixed;
    
    max-height: 200px;
    top:13px;
    @media ${MEDIA_QUERIES.mobile}
    {
    right:0;
        top:82px;
    }

`;

const SearchIconContainer = styled.div`
        width:40%;
        display: flex;
        align-items: center;
        justify-content: center;
        position:relative;

        .icon{
            font-size: 21px;
            position: absolute;
            right: 13px;
        }
        @media ${MEDIA_QUERIES.mobile}
  {
   
    width:90%;
}
`;

const SearchInput = styled(DebounceInput)`
    background-color: ${COLORS.input};
    width: 100% !important;
    height: 45px;
    padding-left: 10px;
    border: none;
    border-radius: 8px 8px 0px 0px;
    outline: none;

    position: relative;
`;

const ResultsContainer = styled.div`
    display: flex;
    align-items:center;
    margin-left: 2%;
    margin-top: 2%;
    margin-bottom: 2%;
    gap:2%;

    cursor: pointer;

   
`;

const Result = styled.div`
    width: 40% !important;
    background: #E7E7E7;

    display: flex;
    flex-direction: column;

    border-radius: 0px 0px 8px 8px;
    overflow-y: scroll;
    overflow-x: hidden;

    position: absolute;
    top:45px;
    @media ${MEDIA_QUERIES.mobile}
  {
   
    width:90vw !important;
}
`;
