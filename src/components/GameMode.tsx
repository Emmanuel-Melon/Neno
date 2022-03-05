import React from 'react'
import { Button } from './ui/button'
import styled from 'styled-components'



const Container = styled.div`
    padding: var(--padding);
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 25%;
    height: 300px;
`


export const GameMode = () => {
    return (
        <Container>
            <Button>Create Room</Button>
            <Button>Join Room</Button>
            <Button>Invitation Link</Button>
        </Container>
    )
}