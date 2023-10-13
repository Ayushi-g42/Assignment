import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;

  .text {
    color: black;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
