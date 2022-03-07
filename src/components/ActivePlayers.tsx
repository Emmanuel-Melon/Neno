import { Avatar } from "@chakra-ui/react"
import styled from 'styled-components'
import { Button } from './ui/button'

const ActivePlayes = styled.div`
    width: 35%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

    
`



const Player = styled.div`
    display: flex;
    width: 49%;
    margin-bottom: 0.5rem;
    align-items: center;
    background: rgba(72, 70, 109, 0.2);
    padding: var(--padding);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    border: solid 0.10rem rgba(72, 70, 109, 0.5);
    cursor: pointer;
    &:hover {
        background: rgba(22, 199, 132, 0.12);
    }

    & h3 {
        margin-left: 1rem;
        font-size: 1.4rem;
        color: var(--primary-color);
    }
`

const PlayerList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: 1rem;
`

const Title = styled.h3`
    color: var(--primary-color);
    font-size: 92px;
    padding: 1rem;
    border-radius: 50%;
    text-align: center;
`


export const ActivePlayers = ({ players }) => {
    return (
        <ActivePlayes>
            <PlayerList>
                {
                    players.map((player: any) => {
                        return (
                            <Player key={player.id}>
                                <Avatar src={player.avatar} />
                                <h3>{player.name}</h3>
                            </Player>
                        )
                    })
                }
            </PlayerList>
        </ActivePlayes>
    )
}