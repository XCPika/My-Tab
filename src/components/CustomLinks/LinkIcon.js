import React from 'react'
import styled from 'styled-components'
import { goTo } from '../functions'

const LinkDiv = styled.div`
    width:7vw;
    height:7vw;
    min-width:45px;
    min-height:45px;
    margin:1vh 1vh;`

const LinkIconStyled = styled.img`
    display: inline-block;
    max-width:10vh;
    height:100%;
    max-height:10vh;
    object-fit: contain;
    border-radius:50%;`

const LinkButton = styled.button`
    background-color: ${props => props.theme.secondary};
    border: none;
    color: white;
    padding: 15px;
    text-decoration: none;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    width:100%;
    height:100%;`

export default class LinkIcon extends React.Component {
    render() {
        const src = this.props.src
        return (
            <LinkDiv>
                <LinkButton title={src} onClick={() => { goTo(src) }} type="button" alt={"Goes to" + src}>
                    <LinkIconStyled
                        src={"https://icons.duckduckgo.com/ip3/" + src + ".ico"}
                    />
                </LinkButton>
            </LinkDiv>
        )
    }

}