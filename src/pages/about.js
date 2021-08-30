import * as React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import RecipeList from "../components/RecipesList"

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AboutWrap = styled.main``
const AboutStyles = styled.section`
  max-width: 50rem;
  margin: 0 auto;
  p {
    margin-bottom: ${({ theme }) => theme.spacing.$4};
  }
`
const RecipeWrap = styled.section``
const HeroTitle = styled.h1`
  font-size: ${props => props.theme.fontsize.lg};
  font-family: ${props => props.theme.font.head};
`
const Title = styled.h2`
  margin: ${({ theme }) => theme.spacing.lg} 0
    ${({ theme }) => theme.spacing.$3};
  font-family: ${({ theme }) => theme.font.head};
  text-align: center;
`

export default function AboutPage({ data }) {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <AboutWrap>
      <AboutStyles>
        <HeroTitle>About me</HeroTitle>
        <p>初めましてこーりん（KOORIN）です！</p>
        <p>
          パン屋で働いてからというもの、米派だった私がすっかりパン好きになりました。
        </p>
        <p>
          家族のためにパンを作ってみたら、私がパン作りに夢中に。。。
          <br />
          生地作りはホームベーカリーにおまかせ
          <br />
          成形を楽しむスタイルでパン作りをしています。
        </p>
        <p>
          息抜きでスイーツづくりや
          <br />
          オートミール（夫が大量に買いすぎた）を使ったおやつレシピもあります。
        </p>
        <p>
          当サイトでは 作ったパンたちを載せたり
          <br />
          レシピがまとまったら、その都度更新していきたいなと思っています。
        </p>
        <p>
          パン作りも、ブログも、
          <br />
          楽しんで続けていきたいので、よかったらご覧になってください :,)
        </p>
      </AboutStyles>
      <RecipeWrap>
        <Title>Recommend</Title>
        <RecipeList recipes={recipes} />
      </RecipeWrap>
    </AboutWrap>
  )
}
