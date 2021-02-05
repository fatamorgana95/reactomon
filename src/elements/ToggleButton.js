import styled from "styled-components";

export default styled.button`
  background: ${(props) => (props.inverseTheme ? "#F9C132" : "#051766")};
  color: ${(props) => (props.inverseTheme ? "#051766" : "#F9C132")};
  margin-left: 110px;
  margin-right: 110px;
  padding: 10px;
  border-radius: 10%;
  font-weight: bold;
`;
