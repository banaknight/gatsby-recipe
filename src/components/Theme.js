import React from "react"

import { ThemeProvider, createGlobalStyle } from "styled-components"

const mainTheme = {
  color: {
    white: "#fff",
    black: "#191A18",
    boundaryWhite: "hsl(0, 0%, 100%, 16%)",
    boundaryBlack: "hsl(90, 8%, 10%, 16%)",
    gray: "#656662",
    whiteGray: "#F5F5F5",
    primary: "#6F804D",
    secondary: "#CCA37A",
  },
  font: {
    head: "Amatic SC",
    text: "Noto Sans JP",
    hero: "M PLUS Rounded 1c",
  },
  fontsize: {
    button: "16px",
    caption: "14px",
    body: "16px",
    subheading: "20px",
    title: "24px",
    heading: "32px",
    display1: "40px",
    hero: "56px",
  },
  breakpoint: {
    mobile: "only screen and (min-width: 768px)",
    tablet: "only screen and (min-width: 900px)",
  },
  spacing: {
    $1: "0.5rem", ///8px
    $2: "1rem", ////16px
    $3: "1.5rem", //24px
    $4: "2.5rem", //40px
    $5: "4rem", ////64px
    lg: "6.5rem", //104px
    xlg: "10.5rem", //168px
  },
  btn: {
    size: "0.5rem 2.5rem",
  },
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
body {
  background: ${props => props.theme.color.white};
  color: ${({ theme }) => theme.color.black};
  font-family: ${({ theme }) => theme.font.text}, sans-serif;
}
h1,h2,h3,h4,h5 {
  font-weight: 700;
}
h1 {
  margin: ${({ theme }) => theme.spacing.$4} 0 ${({ theme }) =>
  theme.spacing.$5};
  font-size: ${({ theme }) => theme.fontsize.hero};
  text-align: center;
}
h2 {
  font-size: ${({ theme }) => theme.fontsize.heading};
}
h3 {
  font-size: ${({ theme }) => theme.fontsize.title};
}
h4 {
  font-size: ${({ theme }) => theme.fontsize.subheading};
}
h5 {
  font-size: ${({ theme }) => theme.fontsize.body};
}
`
export default function Theme({ children }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
