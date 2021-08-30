import React from "react"
import styled from "styled-components"

const RecentPostsStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.$5};
  h2 {
    font-family: ${({ theme }) => theme.font.head};
    text-align: center;
  }
`

export default function RecentPosts() {
  return (
    <RecentPostsStyled>
      <h2>Blog</h2>
    </RecentPostsStyled>
  )
}
