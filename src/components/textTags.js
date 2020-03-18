import styled from 'styled-components'

const Text = styled.p`
font-family: ${props => props.theme.fontFamily};
font-size: ${props => props.theme.headingSize};
color: ${props => props.theme.secondaryText};
margin:0.5rem;
text-shadow: 2px 2px gray;
border-bottom: 3px solid ${props => props.theme.seperator};
padding-bottom:1vh;`

const Title = styled.p`
padding:0;
margin:0;
text-shadow: 2px 2px gray;
color: ${props => props.theme.primaryText};
font-size: ${props => props.theme.titleSize};
font-family: ${props => props.theme.fontFamily};`

export { Text, Title }