import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getNovels } from "api";
import styled from "styled-components";

import Novle from "Components/Novle";

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  padding: 125px 0px 25px 0px;
  background-color: #f2f2f2;
`;

const NovelContainer = styled.div`
  height: 100%auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 320px);
  gap: 25px;

  @media (max-width: 750px) {
    justify-items: center;
    grid-template-columns: 1fr;
  }
  @media (min-width: 1200px) {
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1550px) {
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1850px) {
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);
  }
`;

const New = () => {
  const { loading, error, data } = useQuery(getNovels);
  console.log(data);
  return (
    <>
      <HomeContainer>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <NovelContainer>
            {data.novels.map((novel) => (
              <Novle novel={{ ...novel }} />
            ))}
          </NovelContainer>
        )}
      </HomeContainer>
    </>
  );
};

export default New;
