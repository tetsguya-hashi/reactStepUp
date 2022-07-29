import { Link } from "react-router-dom"
import styled from "styled-components"

export const Header = () => {
  return (
    <SHeader>
      <SLink to='/'>Home</SLink>
      <SLink to='users'>Users</SLink>
    </SHeader>
  )
}
const SHeader = styled.header`
  background-color: #11999e;
  text-align: center;
  padding: 8px;
`
const SLink = styled(Link)`
      color: #fff;
    text-decoration: none;
    padding: 0 10px;
    font-weight: bold;
`