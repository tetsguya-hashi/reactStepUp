import { useContext } from "react";
import styled from "styled-components"
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard"

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `じゃけぇ${val}`,
    image: 'https://source.unsplash.com/NE0XGVKTmcA',
    email: '1232132.com',
    phone: '090-1234-2234',
    company: {
      name: 'テスト株式会社'
    },
    website: 'https://google.com'
  }
}));

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput></SearchInput>
      <br />
      <SecondaryButton onClick={onClickSwitch} >切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

`
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit , minmax(300px,1fr));
  gap:20px
`