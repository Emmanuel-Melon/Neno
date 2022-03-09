import React, { FC } from "react";
import {
    HStack,
    useRadioGroup,
    VStack
} from "@chakra-ui/react";
import { Flex, Heading, Tag } from '@chakra-ui/react'
import { useGetWordCategories } from "../hooks/game";
import { RadioCard } from "./ui/radio";
import { CustomButton } from './ui/button'

type RoomSettingsProps = {
    createRoom: () => void;
}

const RoomCapacity = () => {
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'roomCapacity',
        defaultValue: 8,
        onChange: console.log,
    })

    const group = getRootProps()
    const numOfPlayers = [2, 4, 6, 8]

    return (
        <VStack p='4'>
            <Flex>
                <Heading as='h3' size='md' color='#B7E778'>Players</Heading>
            </Flex>
            <HStack {...group}>
                {numOfPlayers.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                        <RadioCard key={value} {...radio}>
                            {value}
                        </RadioCard>
                    )
                })}
            </HStack>
        </VStack>
    )
}

type WordCategoriesProps = {
    wordCategories: any
}

const WordCategories = ({ wordCategories }: WordCategoriesProps) => {

    return (
        <Flex direction='column' p='4' alignItems='center'>
            <Flex>
                <Heading as='h3' size='md' color='#B7E778'>Word categories</Heading>
            </Flex>
            <Flex justifyContent='space-between'>
                {
                    wordCategories && wordCategories.map((category: any, index: number) => {
                        console.log(category.type)
                        return <Tag key={index} size='lg' variant='subtle' color='#fff' bg='rgba(0, 68, 69, 0.4)' margin='2'>
                            {category.type}
                        </Tag>
                    })
                }
            </Flex>
        </Flex>
    )
}

const RoomPrivacy = () => {
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'roomType',
        defaultValue: 'public',
        onChange: console.log,
    })

    const group = getRootProps()
    const roomVisibilityOptions = ['public', 'private']

    return (
        <VStack p='4'>
            <Flex>
                <Heading as='h3' size='md' color='#B7E778'>Room Type</Heading>
            </Flex>
            <HStack {...group}>
                {roomVisibilityOptions.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                        <RadioCard key={value} {...radio}>
                            {value}
                        </RadioCard>
                    )
                })}
            </HStack>
        </VStack>
    )
}

export const RoomSettings: FC<RoomSettingsProps> = ({ createRoom }) => {
    const { wordCategories } = useGetWordCategories()
    return (
        <Flex direction='column' p='8' w='500px'>
            <RoomPrivacy />
            <WordCategories wordCategories={wordCategories} />
            <RoomCapacity />
            <Flex justifyContent='center' alignItems='center'>
                <CustomButton onClick={createRoom}>Create Room</CustomButton>
            </Flex>
        </Flex>
    )
}