import { useState } from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'
import { useGetActiveRooms, useInsertRoom } from '../../src/hooks/rooms'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Layout from '../../src/layout/layout'
import RoomMembers from '../../src/components/RoomMembers'
import { useGetOnlineUsers } from '../../src/hooks/users'
import RoomChat from '../../src/components/RoomChat'
import GameScreen from '../../src/components/GameScreen'

import { Button } from '../../src/components/ui/button'

const Container = styled.div`
    padding: var(--padding);
    height: 100%;
    background: #0F2027;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`

const Body = styled.div`
    display: flex;
`

const players = [
    {
        id: 1,
        name: "Sisco",
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png'
    },
    {
        id: 2,
        name: "Mimi",
        avatar: 'https://www.kindpng.com/picc/m/21-218808_cool-avatar-png-picture-cool-pics-for-avatar.png'
    },
    {
        id: 3,
        name: "Eman",
        avatar: 'https://www.clipartmax.com/png/middle/290-2907725_native-woman-icon-native-american-ico.png'
    },
    {
        id: 4,
        name: "Madingo",
        avatar: 'https://www.iconpacks.net/icons/2/free-indian-icon-2338-thumb.png'
    },    {
        id: 5,
        name: "Shako",
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png'
    }
]


const rounds = [
    {
        id: 1,
        letter: "A",
        winner: {
            id: 1,
            name: 'Emmanuel'
        },
    },
    {
        id: 2,
        letter: "A",
        winner: {
            id: 1,
            name: 'Emmanuel'
        },
    },
    {
        id: 3,
        letter: "A",
        winner: {
            id: 1,
            name: 'Emmanuel'
        },
    },
    {
        id: 4,
        letter: "A",
        winner: {
            id: 1,
            name: 'Emmanuel'
        },
    },
    {
        id: 5,
        letter: "A",
        winner: {
            id: 1,
            name: 'Emmanuel'
        },
    },
    {
        id: 6,
        letter: "A",
        winner: {
            id: 1,
            name: 'Emmanuel'
        },
    },
    {
        id: 7,
        letter: "A",
        winner: {
            id: 1,
            name: 'Emmanuel'
        },
    },
    {
        id: 8,
        letter: "A",
        winner: {
            id: 1,
            name: 'Emmanuel'
        },
    }
]

const Game: NextPage = () => {
    const [gameStarted, setGameStarted] = useState<boolean>(false)
    const { rooms } = useGetActiveRooms()
    const { users } = useGetOnlineUsers()
    const { insertRoom, error, loading } = useInsertRoom()
    const router = useRouter()
    const roomId = uuidv4()

    function startGame() {
        setGameStarted(currentState => !currentState)
    }


    return (
        <Layout>
            <Container>
                {
                    gameStarted ? <GameScreen players={players}/> : (
                        <Body>
                            <RoomChat />
                            <RoomMembers members={users} />
                        </Body>
                    )
                }
                {
                    !gameStarted ? <Button onClick={startGame}>Start Game</Button> : null
                }
            </Container>
        </Layout>
    )
}

export default Game
