import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import setupTags from "../utils/setupTags"

const TagContainer = styled.div``
const List = styled.div``

export default function TagsList({ recipes }) {
  const newTags = setupTags(recipes)
  return (
    <TagContainer>
      <h4>recipes</h4>
      <List>
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </List>
    </TagContainer>
  )
}
