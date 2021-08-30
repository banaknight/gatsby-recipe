import React from "react"
import styled from "styled-components"

const Text = styled.h1`
  font-size: ${props => props.theme.fontize.lg};
`
const Hero = () => {
  return <Text>ヒーロー</Text>
}

export default Hero
