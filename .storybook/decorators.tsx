import { DecoratorFn } from "@storybook/react"
import { GlobalStyle } from '../src/styles/GlobalStyle';
import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from '../src/styles/theme';
import { withDesign } from 'storybook-addon-designs';
import { BrowserRouter as Router } from 'react-router-dom';

const withRouter: DecoratorFn = (StoryFn) => {
  return <Router> <StoryFn/> </Router>;
}

const withTheme: DecoratorFn = (StoryFn, context) =>{

  const theme = context.parameters.theme || context.globals.theme
  const storyTheme = theme === 'light' ? lightTheme : darkTheme;
  return (
      <ThemeProvider theme={storyTheme}>
        <GlobalStyle />
        <StoryFn />
      </ThemeProvider>
      )
}

export const globalDecorators = [withTheme, withDesign, withRouter];

