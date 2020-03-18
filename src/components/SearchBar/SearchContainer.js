import React from 'react'
import styled from 'styled-components'
import { Text } from '../../components/textTags'
import { goTo } from '../../components/functions';

const SearchContainer = styled.div`
margin: 2vh;
float:right;
width:fill-available;
font-family: ${props => props.theme.fontFamily};`

const SearchBar = styled.input`
width:fill-available;
margin-right:1vw;
border: none;
background: ${props => props.theme.secondary};
font-family: ${props => props.theme.fontFamily};
color: ${props => props.theme.primaryText};
font-size: ${props => props.theme.searchSize};
letter-spacing: 2px;
border-radius:20px;
padding: 2vw;
min-width:0;
margin 1.5vh 2vh;`

const SearchArea = () => {
    let textInput = ""
    return (
        <SearchContainer>
            <Text>Search</Text>
            <form onSubmit={e => { e.preventDefault(); goTo("//www.google.com/search?q=" + textInput.value) }}>
                <SearchBar placeholder="Search..." type='text' name="search" ref={(value) => textInput = value} />
            </form>
        </SearchContainer>
    );
};

export default SearchArea