import React from "react";
import styled from "styled-components";

const Novel = styled.div`
  position: relative;
  display: grid;
  width: 360px;
  animation: fadeInAnimation ease 0.4s;
  background-color: #ffffff;
  border-radius: 8px;
  @media (max-width: 350px) {
    width: 320px;
    border-radius: 0px;
  }
`;
// profile => poster

const NovelHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0px 8px;
`;
const Title = styled.h1`
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 32px;
`;
const Creator = styled.h1`
  font-size: 15px;
`;
const NovelMain = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  font-size: 13px;
  line-height: 18px;
  color: #666666;
  padding: 0px 8px;
`;
const Poster = styled.img`
  position: relative;
  width: 100%;
  height: 202px;
  object-fit: none;
  @media (max-width: 350px) {
    justify-items: center;
    width: 100%auto;
  }
`;
const Description = styled.span``;

const NovelFooter = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 8px;
`;
const NovelDescription = styled.div`
  height: 100%;
  display: grid;
`;

const Icon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #f2f2f2;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  novel: { _id, creator, poster, title, text, like, disLike, createBy },
}) => {
  return (
    <Novel key={_id} id={_id}>
      <NovelHeader>
        <Icon />
        <Creator>{creator}</Creator>
      </NovelHeader>
      <Poster src={poster} />

      <NovelDescription>
        <NovelMain>
          <Title> {title}</Title>
          <Description>{text}</Description>
        </NovelMain>
        <NovelFooter>
          {like}
          {disLike}
          {createBy}
        </NovelFooter>
      </NovelDescription>
    </Novel>
  );
};
