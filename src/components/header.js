import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "./Logo"

const HeaderStyles = styled.header`
  font-size: ${({ theme }) => theme.fontsize.h3};
  nav ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontsize.title};
    font-family: "Amatic SC";
    @media (min-width: 768px) {
      grid-template-columns: 1fr repeat(4, auto);
    }
  }
  nav ul li a {
    display: inline-block;
    padding: 0 ${({ theme }) => theme.spacing.$3};
    color: ${({ theme }) => theme.color.black};
  }
`
const MenuLogo = styled.li``
const MenuItem = styled.li`
  display: flex;
  align-items: center;
`

export default function Header() {
  return (
    <HeaderStyles>
      <nav>
        <ul>
          <MenuLogo>
            <Link to="/">
              <Logo />
            </Link>
          </MenuLogo>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/blog">Blog</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/recipe">Recipe</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">About</Link>
          </MenuItem>
        </ul>
      </nav>
    </HeaderStyles>
  )
}
