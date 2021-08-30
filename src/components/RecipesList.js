import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import slugify from "slugify"

const RecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${({ theme }) => theme.spacing.$2};
  h5 {
    margin: ${({ theme }) => theme.spacing.$2} 0
      ${({ theme }) => theme.spacing.$1};
    color: ${({ theme }) => theme.color.black};
  }
  p {
    color: ${({ theme }) => theme.color.gray};
    font-size: ${({ theme }) => theme.fontsize.caption};
  }
`

export default function RecipesList({ recipes = [] }) {
  return (
    <RecipeList>
      {recipes.map(recipe => {
        const { id, title, name, category, image, prepTime, cookTime } = recipe
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`}>
            <GatsbyImage image={pathToImage} alt={title} />
            <h5>{name}</h5>
            <p>{category}</p>
            <p>
              準備 : {prepTime}分 | 調理 : {cookTime}時間
            </p>
          </Link>
        )
      })}
    </RecipeList>
  )
}
