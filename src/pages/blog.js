import * as React from "react"
import styled from "styled-components"

const HeroTitle = styled.h1`
  font-size: ${props => props.theme.fontsize.lg};
  font-family: ${props => props.theme.font.head};
`

export default function BlogPage() {
  return (
    <>
      <HeroTitle>Blog</HeroTitle>
    </>
  )
}
