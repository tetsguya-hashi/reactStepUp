import styled from "styled-components";
import { memo, useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
  console.log('UserIconWithName')
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`
const SImg = styled.img`
  width: 160px;
  border-radius: 50%;
`
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`