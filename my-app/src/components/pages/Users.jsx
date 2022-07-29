import styled from "styled-components"
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
}))

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput></SearchInput>
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