import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;

  .text {
    text-align: center;
    color: black;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .profile {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    padding: 15px;
    margin-top: 20px;

    .last-item {
      padding-top: 10px;
    }
  }
`;
