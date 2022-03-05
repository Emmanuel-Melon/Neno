import type { NextPage } from 'next'
import styled from 'styled-components'
import { useGetActiveRooms, useInsertRoom } from '../../src/hooks/rooms'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Layout from '../../src/layout/layout'
import RoomMembers from '../../src/components/RoomMembers'
import { useGetOnlineUsers } from '../../src/hooks/users'
import RoomChat from '../../src/components/RoomChat'

import { Button } from '../../src/components/ui/button'

const Container = styled.div`

`

const Body = styled.div`
    display: flex;
`

const Game: NextPage = () => {
    const { rooms } = useGetActiveRooms()
    const { users } = useGetOnlineUsers()
    const { insertRoom, error, loading } = useInsertRoom()
    const router = useRouter()
    const roomId = uuidv4()

    function startGame() {
        insertRoom({
            hostId: "78ad3bbf-7d76-4580-824c-e031abdb7da7",
            id: roomId
        }).then(res => {
            router.push(`/Game/${roomId}`)
        })
    }


    return (
        <Layout>
            <Container>

                <Body>
                    <RoomChat />
                    <RoomMembers members={users} />
                </Body>
                <Button>Start Game</Button>
            </Container>
        </Layout>
    )
}

export default Game
