import styled from "styled-components";
import { COLORS } from "../constants/layoutConstants";
import { IoMdSearch } from "react-icons/io";
import { DebounceInput } from "react-debounce-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [users, setUsers] = useState([]);

    function catchUsers(e) {

        // const promise = axios.get(``);

        // promise.then((res) => );

        // promise.catch((error) => );
    }

    function searchResult(username, users) {

        if (users) {
            return (
                <ResultsContainer>
                    <img
                        src="https://imagenscomfrases.com.br/wp-content/uploads/2021/09/frase-engracadas-16.jpg"
                        alt="Usuário"
                    />
                    <p onClick={() => navigate("/users/:id")}>Batata</p>
                </ResultsContainer>
            )
        }

    }

    return (
        <Container>
            <div>
                <SearchInput
                    placeholder="Search for people and friends"
                    value={username}
                    minLength={3}
                    debounceTimeout={300}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        catchUsers();
                    }}
                />

                <IoMdSearch className="icon" type="submit" />
            </div>
            {searchResult}
            <Result>
            </Result>
        </Container>
    )

}

const Container = styled.div`
    width:60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #E7E7E7;
    border-radius: 8px;

    div{
        width:100%;
        display: flex;
        align-items: center;
        position: relative;

        .icon{
            font-size: 21px;
        }
    }
`;

const SearchInput = styled(DebounceInput)`
    background-color: ${COLORS.input};
    width: 40%;
    height: 45px;
    padding-left: 10px;
    border: none;
    border-radius: 8px;
    outline: none;
`;

const ResultsContainer = styled.div`
    display: flex;
    align-items:center;
    margin-left: 2%;
    margin-top: 2%;
    margin-bottom: 2%;
    gap:2%;
`;

const Result = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    overflow-y: scroll;
    overflow-x: hidden;

    position: absolute;
`;