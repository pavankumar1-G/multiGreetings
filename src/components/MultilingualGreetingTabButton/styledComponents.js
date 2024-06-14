import styled from 'styled-components'

export const ButtonItem = styled.li`
  list-style-type: none;
  margin: 30px;
`
export const Button = styled.button`
  height: 36px;
  width: 100px;
  background-color: ${props => props.backgroundColor};
  border: 1px solid #db1c48;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  color: ${props => props.textColor};
  font-weight: bold;
`
