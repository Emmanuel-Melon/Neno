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

`

const Body = styled.div`
    display: flex;
`

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
                    gameStarted ? <GameScreen /> : (
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
