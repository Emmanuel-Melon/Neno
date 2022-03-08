import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Room = styled.div`
background: rgba(72, 70, 109, 0.2);
padding: var(--padding);
border-radius: var(--border-radius);
box-shadow: var(--box-shadow);
border: solid 0.10rem rgba(72, 70, 109, 0.5);
margin: 1rem;
color: #333;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;

&:hover {
    background: rgba(72, 70, 109, 0.5);
}

& h3 {
    color: var(--primary-color);
}
`

const List = styled.div`
    width: 45%;
`

type ListRoomsProps = {
    rooms: any
}

const Title = styled.h3`
    color: red;
`

const RoomInfo = styled.div`
    display: flex;
    justify-content: space-between;
`


export const ListRooms = ({ rooms }: ListRoomsProps) => {
    const router = useRouter()

    const joinRoom = (roomId: string) => {
        router.push(`/Game/${roomId}`)
    }
    return (
        <List>
            {
                rooms && rooms.map((room: any) => {
                    return (
                        <Room key={room.id} onClick={() => joinRoom(room.id)}>
                            <RoomInfo>
                                <div>
                                    <Title>Room ID: {room.id}</Title>
                                    <Title>Host: Emmanuel</Title>
                                </div>
                                <div>
                                    <Title>5/8 </Title>
                                    <Title>Mode: Classic</Title>
                                </div>
                            </RoomInfo>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                                <Avatar />
                                <Avatar />
                                <Avatar />
                                <Avatar />
                            </div>
                        </Room>
                    )
                })
            }
        </List>
    )
}