import styled from "styled-components";
import { COLORS } from "../constants/layoutConstants";
import { CgChevronDown } from "react-icons/cg";
import { DebounceInput } from "react-debounce-input";
import { useState } from "react";

export default function SearchBar() {
    const [username, setUsername] = useState("");
    const [users, setUsers] = useState([]);

    function catchUsers(e) {
        e.preventDefault();

        const promise = axios.get(``);

        promise.then((res) => );

        promise.catch((error) => );
    }

    function searchResult(username, users) {

        return (
            <ResultsContainer>
                <img
                    src="https://imagenscomfrases.com.br/wp-content/uploads/2021/09/frase-engracadas-16.jpg"
                    alt="Usuário"
                />
                <p>Batata</p>
            </ResultsContainer>
        )

    }

    return (
        <Container>
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
            <SearchButton type="submit">
                <CgChevronDown />
            </SearchButton>
            {searchResult}
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #E7E7E7;
    border-radius: 8px;
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

const SearchButton = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 21px;
`;

const ResultsContainer = styled.div`
`;