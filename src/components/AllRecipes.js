import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import RecipesList from "./RecipesList"
import styled from "styled-components"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        name
        cookTime
        prepTime
        category
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const RecipeWrap = styled.div``

export default function AllRecipes() {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <RecipeWrap>
      <RecipesList recipes={recipes} />
    </RecipeWrap>
  )
}
