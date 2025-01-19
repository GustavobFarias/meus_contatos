import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Contato = styled(Link)`
  padding: 8px;
  margin-top: 16px;
  color: #fff;
  text-decoration: none;
  background-color: #008000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #38b000;
  }
`
