import type { NextPage } from 'next'
import { useGetActiveRooms } from '../../src/hooks/rooms'
import { ListRooms } from '../../src/components/ListRooms'
import Layout from '../../src/layout/layout'
import { PlayerStats } from '../../src/components/PlayerStats'
import { Flex, Text } from "@chakra-ui/layout"
import { CustomButton } from '../../src/components/ui/button'

const Rooms: NextPage = () => {
    const { rooms } = useGetActiveRooms()

    return (
        <Layout>
            <Flex>
                <Flex>
                    <PlayerStats />
                </Flex>
                {
                    rooms && rooms.length === 0 ? <h3>No Rooms Available. Create a room? </h3> : <ListRooms rooms={rooms} />
                }
                <Flex
                                p='8'
                                style={{
                                    borderRadius: '1rem'
                                }}
                                width='fit-content'
                                height='fit-content'
                                direction='column'
                >
                    <Text color='#fff' marginBottom='2'>Create your own room!</Text>
                    <Text>Show Friends and what they're are playing</Text>
                    <Text>Add ability to inspect friends</Text>
                    <Text>Invite for next game</Text>
                    <CustomButton>Create Room</CustomButton>
                </Flex>
            </Flex>
        </Layout>
    )
}

export default Rooms
