import React, { FC } from 'react'
import styled from 'styled-components'
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
}


export const GameMenu: FC<GameMenuProps> = ({ startGame, viewOptions, viewInstructions }) => {
    return (
        <Container>
            <h1>Frodle</h1>
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