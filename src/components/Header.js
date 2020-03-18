import React from 'react'
import styled from 'styled-components'
import { getTitle } from './functions'
import { Title } from './textTags'

const HeaderPanel = styled.div`
width:100%;
height:10%;
background: ${props => props.theme.secondary};
display:flex;
justify-content:center;
align-items:center;
border-bottom: 5px solid ${props => props.theme.seperator};`

class Header extends React.Component {

    render() {
        return (
            <HeaderPanel>
                <Title>{getTitle()}</Title>
            </HeaderPanel>
        )
    }
}

export default Header