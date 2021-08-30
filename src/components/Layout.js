import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"

const LayoutStyles = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: ${({ theme }) => theme.spacing.$4};
  min-height: 100vh;
  padding: 0 calc((100vw - 80rem) / 2);
`

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  )
}
