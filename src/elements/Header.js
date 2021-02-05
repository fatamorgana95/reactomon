import styled from "styled-components";

export default styled.header`
  background: ${(props) => (props.inverseTheme ? "#051766" : "#F9C132")};
  color: #fff;
  text-align: center;
  padding: 30px;
`;
