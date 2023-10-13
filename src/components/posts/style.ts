import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;

  .post-wrap {
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
    width: 31%;
    cursor: pointer;

    @media (max-width: 767px) {
      width: 48%;
    }
    @media (max-width: 575px) {
      width: 100%;
    }
  }

  .single-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .three-line {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .title {
    color: black;
    font-size: 22px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
  }
  .text {
    color: black;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 20px;
  }
`;
