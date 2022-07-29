import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Input } from "../atoms/input/Input"
import styled from "styled-components"
import { memo } from "react"

export const SearchInput = memo(() => {
  console.log('SearchInput')
  return (
    <Scontainer>
      <Input placeholder='検索条件を入力' />
      <SbuttonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SbuttonWrapper>
    </Scontainer>
  )
});

const Scontainer = styled.div`
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
`
const SbuttonWrapper = styled.div`
padding-left: 8px;
`