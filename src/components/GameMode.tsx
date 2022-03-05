import React, { FC, useState } from 'react'
import { Button } from './ui/button'
import styled from 'styled-components'
import { RoomSettings } from './RoomSettings'
import { CustomModal } from './ui/modal'

const Container = styled.div`
    padding: var(--padding);
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 25%;
`

type GameModeProps = {
    joinRoom: () => void;
    createRoom: () => void;
}

export const GameMode: FC<GameModeProps> = ({ createRoom, joinRoom }) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false)

    function closeModal() {
        setModalOpen(currentState => !currentState)
      }

    function openModal () {
        setModalOpen(currentState => !currentState)
    }
    return (
        <Container>
            <Button fullWidth onClick={openModal}>Create Room</Button>
            <Button fullWidth onClick={joinRoom}>Join Room</Button>


            <CustomModal show={isModalOpen} close={closeModal}>
                <>
                    <RoomSettings createRoom={createRoom} /> 
                </>
            </CustomModal>
        </Container>
    )
}