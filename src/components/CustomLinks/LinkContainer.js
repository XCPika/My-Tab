import React from 'react'
import styled from 'styled-components'
import CatagorySection from './Cat_Section'
import Sites from '../../json/websites.json'

const LinkContainerStyled = styled.div`
margin: 2vh;
background: ${props => props.theme.primary};
width:max-content;
float:left;
z-index:1
`

export default class LinkContainer extends React.Component {
    
    render() {
        let i = 0;
        return (
            <LinkContainerStyled>
            {Object.keys(Sites).map((catagory => {
                return (
                <CatagorySection key={i++} value={catagory}/>
                )
            }))}
            </LinkContainerStyled>
        );
    }

}