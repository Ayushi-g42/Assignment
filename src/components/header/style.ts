import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .back-button {
    background-color: aliceblue;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .country-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 50%;
    @media (max-width: 575px) {
      width: 80%;
    }
  }

  .country-input {
    width: 40%;
    padding: 8px;
    border: 1px solid gray;
    border-radius: 5px;
  }
  .time-wrap {
    background-color: black;
    color: white;
    padding: 10px 20px;
    width: 30%;
    text-align: center;

    @media (max-width: 767px) {
      padding: 8px 5px;
    }

    .time {
      font-size: 20px;
    }
  }

  .time-button {
    background-color: greenyellow;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 20%;
  }
`;
