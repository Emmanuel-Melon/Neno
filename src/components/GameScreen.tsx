import React from "react";
import styled from 'styled-components'
import { Input } from '@chakra-ui/react'
import { Planet } from 'react-planet'
import { CircleMenu, CircleMenuItem } from "react-circular-menu";

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: var(--padding);
    align-items: center;
    height: 100vh;

`

const Guesses = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    background: var(--accent-color);
    padding: var(--padding);
    border-radius: 5rem;
    border: solid 1rem var(--secondary-color);
    align-items: center;
    
    & div {
        margin: 0.5rem;
    }
`

const GuessCategories = styled.div`
    display: flex;
`

const Timer = styled.div`
    background: var(--white);
    padding: var(--padding);
    width: 150px;
    text-align: center;
`

const GameInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--white);
    width: 100%;
    padding: var(--padding);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    margin-bottom: 1rem;

`

/**
 * 
 * @returns 
 *                         <Guesses>
                            <GuessCategories>
                                <div>
                                    <Input placeholder='Animal' />
                                </div>
                                <div>
                                    <Input placeholder='Country' />
                                </div>
                                <div>
                                    <Input placeholder='Object' />
                                </div>
                                <div>
                                    <Input placeholder='Food' />
                                </div>
                                <div>
                                    <Input placeholder='Name' />
                                </div>
                            </GuessCategories>
                            <Timer>
                                <h3>04:48</h3>
                            </Timer>
                        </Guesses>
 */


/**
 * 
 * @returns <GameInfo>
    <h3>Exit Game</h3>

    <h3>S</h3>

    <div>
        <h3>Game: #125</h3>
        <p>5/6 players</p>
    </div>
</GameInfo>
 */
export default function GameScreen() {

    const Players = [
        {
            id: 1,
            name: "Sisco"
        },
        {
            id: 2,
            name: "Sisco"
        },
        {
            id: 3,
            name: "Sisco"
        },
        {
            id: 1,
            name: "Sisco"
        },
        {
            id: 2,
            name: "Sisco"
        },
        {
            id: 3,
            name: "Sisco"
        },
        {
            id: 1,
            name: "Sisco"
        },
        {
            id: 2,
            name: "Sisco"
        }
    ]
    return (

        <Container>
            <CircleMenu
                startAngle={-90}
                rotationAngle={360}
                itemSize={5}
                radius={15}
                /**
                 * rotationAngleInclusive (default true)
                 * Whether to include the ending angle in rotation because an
                 * item at 360deg is the same as an item at 0deg if inclusive.
                 * Leave this prop for angles other than 360deg unless otherwise desired.
                 */
                rotationAngleInclusive={false}
            >
                {Players.map(player => {
                    return (<CircleMenuItem tooltip="Info" key={player.id}>
                        <h1>{player.name}</h1>
                    </CircleMenuItem>)
                })}

            </CircleMenu>
        </Container>

    )
}