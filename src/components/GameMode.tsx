import React, { FC, useState } from 'react'
import { RoomSettings } from './RoomSettings'
import { CustomModal } from './ui/modal'
import { Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import { CustomButton } from './ui/button'

type GameModeProps = {
    joinRoom: () => void;
    createRoom: () => void;
}

export const GameMode: FC<GameModeProps> = ({ createRoom, joinRoom }) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false)

    function closeModal() {
        setModalOpen(currentState => !currentState)
    }

    function openModal() {
        setModalOpen(currentState => !currentState)
    }
    return (

        <Flex
            width={"100%"}
            height={"100%"}
            minHeight={"100vh"}
            alignItems={"center"}
            p={["4%", "2%"]}
            direction={"column"}
        >
            <Flex
                direction='column'
                p='16'
                alignItems='center'
                style={{
                    background: 'rgba(25, 41, 101, 0.4)',
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                    borderRadius: '1rem'
                }}

            >
                <Heading as='h1' size='lg' color='#B7E778'>New Game</Heading>
                <Flex
                    direction='column'
                    height='120px'
                    justifyContent='space-between'
                    width='350px'
                >
                    <CustomButton
                        onClick={openModal}
                        icon={<Image alt='logo' src='/icons/icons8-create.svg' width='30' height='30' />}
                    >
                        Create Room</CustomButton>
                    <CustomButton
                        onClick={joinRoom}
                        icon={<Image alt='logo' src='/icons/icons8-enter.svg' width='30' height='30' />}
                    >
                        Join Room</CustomButton>
                </Flex>
                <CustomModal show={isModalOpen} close={closeModal}>
                    <RoomSettings createRoom={createRoom} />
                </CustomModal>
            </Flex>
        </Flex>
    )
}