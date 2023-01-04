import styled from "styled-components";
import { COLORS } from "../constants/layoutConstants";

export default function CreatePost() {
  return (
    <CreatePostContainer>
      <img
        src="https://imagenscomfrases.com.br/wp-content/uploads/2021/09/frase-engracadas-16.jpg"
        alt="User"
      />
      <Form>
        <header>What are you going to share today?</header>
        <input type="url" placeholder="Link" />
        <textarea placeholder="Description" />
        <button type="submit">Publish</button>
      </Form>
    </CreatePostContainer>
  );
}

const CreatePostContainer = styled.div`
  background-color: #fff;
  width: 42%;
  height: 209px;
  margin-bottom: 29px;
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: flex;

  img {
    width: 50px;
    height: 50px;
    margin-right: 18px;
    border-radius: 100%;
    object-fit: cover;
  }
`;

const Form = styled.form`
  text-align: end;
  width: 100%;

  header {
    color: #707070;
    text-align: start;
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 20px;
  }

  input {
    background-color: #efefef;
    width: 100%;
    height: 30px;
    font-size: 15px;
    font-weight: 300;
    padding-left: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  textarea {
    background-color: #efefef;
    resize: none;
    width: 100%;
    height: 60px;
    padding-left: 10px;
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: 300;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  button {
    color: ${COLORS.text};
    background-color: ${COLORS.button};
    width: 25%;
    height: 31px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
  }
`;
