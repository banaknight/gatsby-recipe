import React from "react"
import styled from "styled-components"

const Text = styled.h1`
  font-size: ${props => props.theme.fontsize.lg};
`

const Search = () => {
  return <Text>検索</Text>
}

export default Search
