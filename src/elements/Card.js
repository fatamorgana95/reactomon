import styled from "styled-components";

export default styled.div`
  background: #d3580c;
  width: 20%;
  margin: 15px;
  padding: 15px;
  border: 5px;
  border-radius: 10%;
  font-weight: bold;
  display: block;
  text-align: center;
  color: #051766;
  &:hover {
    background: orange;
  }
  & > img {
    max-width: 300px;
    height: 300px;
  }
  & > a > img {
    max-width: 300px;
    height: 300px;
  }
  & > a {
    text-decoration: none;
    color: #051766;
  }
`;
