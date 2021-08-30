import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
// imp icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

const Icons = styled.div`
  display: inline-grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: ${({ theme }) => theme.spacing.$2};
  margin: ${({ theme }) => theme.spacing.$4} 0;

  & svg {
    font-size: ${({ theme }) => theme.fontsize.display1};
    color: ${({ theme }) => theme.color.primary};
    transition: 0.4s;
    &:hover {
      color: ${({ theme }) => theme.color.white};
    }
  }
`

export default function SoocialIcons() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            facebook
            instagram
            twitter
          }
        }
      }
    }
  `)
  const { social } = data.site.siteMetadata

  return (
    <div>
      <Icons>
        <a href={social.facebook}>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href={social.instagram}>
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a href={social.twitter}>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
      </Icons>
    </div>
  )
}
