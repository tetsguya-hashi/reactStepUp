import styled from 'styled-components';

export const BaseButton = styled.button`
  display: inline-block;
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  border-radius:30px;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    opacity: .7;
  }
`