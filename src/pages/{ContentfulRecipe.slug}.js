import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import styled from "styled-components"

export const query = graphql`
  query getSingleRecipe($slug: String) {
    contentfulRecipe(slug: { eq: $slug }) {
      cookTime
      content {
        instructions
        ingredients
      }
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
      description {
        description
      }
      name
      prepTime
      servings
      slug
      title
    }
  }
`

const RecipeWrap = styled.div``
const RecipeHero = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  @media ${({ theme }) => theme.breakpoint.mobile} {
    grid-template-columns: 1fr 1fr;
    column-gap: ${({ theme }) => theme.spacing.$2};
  }
`
const RecipeInfo = styled.article``
const Heading = styled.h2`
  margin: ${({ theme }) => theme.spacing.$1} 0
    ${({ theme }) => theme.spacing.$4};
`
const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.font.head};
`
const RecipeIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin: ${({ theme }) => theme.spacing.$5} 0;
`
const RecipeIcon = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RecipeContent = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
`
const Subheading = styled.h4`
  margin: ${({ theme }) => theme.spacing.$4} 0
    ${({ theme }) => theme.spacing.$2};
  font-size: ${({ theme }) => theme.fontsize.subheading};
`
const Step = styled.div`
  margin: ${({ theme }) => theme.spacing.$1} 0;
`
const StepHeader = styled.div``
const SingleIngredient = styled.div`
  line-height: 32px;
`

const RecipeTemplate = ({ data }) => {
  const {
    title,
    name,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulRecipe
  const pathToImage = getImage(image)
  const { instructions, ingredients } = content
  return (
    <RecipeWrap>
      {/* hero */}
      <RecipeHero>
        <GatsbyImage image={pathToImage} alt={title} className="about-img" />
        <RecipeInfo className="recipe-info">
          <Subtitle>{title}</Subtitle>
          <Heading>{name}</Heading>
          <p>{description}</p>
          {/* icons */}
          <RecipeIcons className="recipe-icons">
            <RecipeIcon>
              <BsClock />
              <h5>prep time</h5>
              <p>{prepTime} min.</p>
            </RecipeIcon>
            <RecipeIcon>
              <BsClockHistory />
              <h5>cook time</h5>
              <p>{cookTime} min.</p>
            </RecipeIcon>
            <RecipeIcon>
              <BsPeople />
              <h5>serving</h5>
              <p>{servings} </p>
            </RecipeIcon>
          </RecipeIcons>
        </RecipeInfo>
      </RecipeHero>
      {/* rest of the content */}
      <RecipeContent>
        <article>
          <Subheading>instructions</Subheading>
          {instructions.map((item, index) => {
            return (
              <Step key={index}>
                <StepHeader>
                  <h5>step {index + 1}</h5>
                  <div></div>
                </StepHeader>
                <p>{item}</p>
              </Step>
            )
          })}
        </article>
        <article className="second-column">
          <div>
            <Subheading>ingredients</Subheading>
            {ingredients.map((item, index) => {
              return <SingleIngredient key={index}>{item}</SingleIngredient>
            })}
          </div>
        </article>
      </RecipeContent>
    </RecipeWrap>
  )
}

export default RecipeTemplate
