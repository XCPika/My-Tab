import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import m_theme from './json/main_theme'
import Header from './components/Header'
import LinkContainer from './components/CustomLinks/LinkContainer'
import SearchArea from './components/SearchBar/SearchContainer'

const Container = styled.div`
background: ${props => props.theme.primary};
width:100%;
height:100vh;
overflow:hidden;
`

const MainContainer = styled.div`
background: ${props => props.theme.primary};
height:90%;
display:flex;
overflow:auto;
`

function App() {
  return (
      <ThemeProvider theme={m_theme}>
        <Container>
          <Header/>
          <MainContainer>
            <LinkContainer/>
            <SearchArea/>
          </MainContainer>
        </Container>
      </ThemeProvider>
  );
};

export default App;
