import React from 'react'
import styled from 'styled-components'
import { getCatagory } from '../functions'
import { Text } from '../textTags'
import LinkIcon from './LinkIcon'

const Container = styled.div`
height:auto;
padding: 0vh 1vh;`

const LinkContent = styled.div`
display:flex;
padding-bottom: 0.5vh;`

export default class CatagorySection extends React.Component {
    
    render() {
        const sites = getCatagory(this.props.value)
        let i = 0;
        return (
            <Container>
                <Text>{this.props.value}</Text>
                <LinkContent>
                    {sites.map((site => {
                        return (
                            <LinkIcon key={i++} src={site}/>
                        );
                    }))}
                </LinkContent>
            </Container>
        );
    };
}

