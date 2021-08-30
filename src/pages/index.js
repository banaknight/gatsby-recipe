import * as React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import Banner from "../assets/images/home-banner.jpg"
import RecipeList from "../components/RecipesList"
import SocialIcons from "../components/SocialIcons"

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        name
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const HomePageStyle = styled.div`
  font-size: ${props => props.theme.fontsize.lg};
`
const Hero = styled.div`
  position: relative;
  height: 30rem;
  margin: ${({ theme }) => theme.spacing.$5} calc(50% - 48vw) 0;
  background: url(${Banner});
`

const TextWrap = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  padding: 0 ${({ theme }) => theme.spacing.$4};
  transform: translate(-50%, -80%);
  background: ${({ theme }) => theme.color.white};
`
const HeroText = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontsize.h1};
  font-family: "M PLUS Rounded 1c";
  letter-spacing: 2px;
`
const SubHeroText = styled.h2`
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.fontsize.h2};
  font-family: ${({ theme }) => theme.font.head};
`
const SocialIconsWrap = styled.div`
  position: absolute;
  top: 50%;
  right: calc(0px + 1rem);
  transform: translateY(-50%);
`

const Button = styled.div`
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  a {
    outline: none;
    border: none;
    padding: ${({ theme }) => theme.btn.size};
    background: ${({ theme }) => theme.color.primary};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontsize.button};
    font-family: ${({ theme }) => theme.font.head};
    transition: 0.4s;
    &:hover {
      color: ${({ theme }) => theme.color.secondary};
      background: ${({ theme }) => theme.color.white};
    }
  }
`

const RecipeWrap = styled.section``
const Title = styled.h2`
  margin: ${({ theme }) => theme.spacing.lg} 0
    ${({ theme }) => theme.spacing.$3};
  font-family: ${({ theme }) => theme.font.head};
  text-align: center;
`

export default function IndexPage({ data }) {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <HomePageStyle>
      <Hero>
        <TextWrap>
          <SubHeroText>Eat to Make</SubHeroText>
          <HeroText>作るために食べる</HeroText>
        </TextWrap>
        <SocialIconsWrap>
          <SocialIcons />
        </SocialIconsWrap>
        <Button>
          <Link to="/about">About Me</Link>
        </Button>
      </Hero>

      <RecipeWrap>
        <Title>Recommend</Title>
        <RecipeList recipes={recipes} />
      </RecipeWrap>
    </HomePageStyle>
  )
}
