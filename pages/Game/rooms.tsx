import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { useGetActiveRooms, useInsertRoom } from '../../src/hooks/rooms'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import { ListRooms } from '../../src/components/ListRooms'
import Layout from '../../src/layout/layout'
import { PlayerStats } from '../../src/components/PlayerStats'

const Container = styled.div`
    padding: 1rem;
    display: flex;
`

const Info = styled.div`
    flex: 1;
`

const Rooms: NextPage = () => {
    const { rooms } = useGetActiveRooms()
    const { insertRoom, error, loading } = useInsertRoom()
    const router = useRouter()

    return (
        <Layout>
            <Container>
                <Info>
                    <PlayerStats />
                </Info>
                {
                    rooms && rooms.length === 0 ? <h3>No Rooms Available. Create a room? </h3> : <ListRooms rooms={rooms} />
                }
            </Container>
        </Layout>
    )
}

export default Rooms
