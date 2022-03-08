import React, { FC } from 'react'
import styled from 'styled-components'
import { Heading } from '@chakra-ui/react'
import { Button } from './ui/button'

const Container = styled.div`
    width: 25%;
    & ul {
        padding: var(--padding);
    }

    & h1 {
        text-align: center;
        color: var(--white);
    }

`

type GameMenuProps = {
    startGame: () => void;
    viewOptions: () => void;
    viewInstructions: () => void;
    session: any;
}

const Greeting = styled.div`
    color: var(--secondary-color);
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const GameMenu: FC<GameMenuProps> = ({ startGame, viewOptions, viewInstructions, session }) => {
    return (
        <Container>
            <Greeting><Heading>Welcome, {session.user.name}</Heading></Greeting>
            <ul>
                <li >
                    <Button onClick={startGame} fullWidth>
                        Play
                    </Button>
                </li>
                <li>
                    <Button onClick={viewOptions} fullWidth>
                        Options
                    </Button></li>
                <li>
                    <Button onClick={viewInstructions} fullWidth>
                        How to play</Button></li>
            </ul>
        </Container>
    )
}