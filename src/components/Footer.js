import React from "react"
import styled from "styled-components"

const Copyright = styled.footer`
  margin: 0 calc(50% - 50vw);
  padding: ${({ theme }) => theme.spacing.$2};
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontsize.caption};
`

const Footer = () => {
  return <Copyright>&copy; KOORIN 2021.</Copyright>
}

export default Footer
