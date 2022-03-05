import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "./ui/button";
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    HStack,
    Box,
    useRadio,
    useRadioGroup,
} from "@chakra-ui/react";

import { RadioCard } from "./ui/radio";

const Container = styled.div`
    padding: var(--padding);
    & h1 {
        text-align: center;
        color: var(--white);
    }

    & li {
        cursor: pointer;
        padding: var(--padding);
        border-radius: var(--border-radius);
        border-radius: var(--border-radius);
        color: #fff;
        background: var(--primary-color);
        box-shadow: var(--box-shadow);
        text-align: center;
        margin: 1rem;
        &:hover {
            background: var(--accent-color);
        }
    }
`

const Option = styled.div`
padding: var(--padding);
background: var(--white);
margin: 0.5rem;

`

const OptionBody = styled.div`
    display: flex;
    justify-content: flex-start;
`

const OptionHeader = styled.div`
    
`

const FormControl = styled.div`
    padding: 0.5rem;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
`

type RoomSettingsProps = {
    createRoom: () => void;
}


export const RoomSettings: FC<RoomSettingsProps> = ({ createRoom }) => {

    const options = ['public', 'private']

    const players = [2, 4, 6, 8]

    const roomNames = ["Random", "Custom Name"]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'roomType',
        defaultValue: 'public',
        onChange: console.log,
    })

    const group = getRootProps()
    return (
        <>
            <Container>
            <Option>
                    <OptionHeader>
                        <p>Room Type</p>
                    </OptionHeader>
                    <OptionBody>
                        <HStack {...group}>
                            {roomNames.map((value) => {
                                const radio = getRadioProps({ value })
                                return (
                                    <RadioCard key={value} {...radio}>
                                        {value}
                                    </RadioCard>
                                )
                            })}
                        </HStack>
                    </OptionBody>
                </Option>
                <Option>
                    <OptionHeader>
                        <p>Room Type</p>
                    </OptionHeader>
                    <OptionBody>
                        <HStack {...group}>
                            {options.map((value) => {
                                const radio = getRadioProps({ value })
                                return (
                                    <RadioCard key={value} {...radio}>
                                        {value}
                                    </RadioCard>
                                )
                            })}
                        </HStack>
                    </OptionBody>
                </Option>
                <Option>
                    <OptionHeader>
                        <p>Word categories</p>
                    </OptionHeader>
                    <OptionBody>
                        <FormControl>
                            <Editable defaultValue='Animal'>
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                        </FormControl>
                        <FormControl>
                            <Editable defaultValue='Country'>
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                        </FormControl>
                        <FormControl>
                            <Editable defaultValue='Name'>
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                        </FormControl>
                        <FormControl>
                            <Editable defaultValue='Object'>
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                        </FormControl>
                        <FormControl>
                            <Editable defaultValue='Food'>
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                        </FormControl>
                    </OptionBody>
                </Option>
                <Option>
                    <OptionHeader>
                        <p>Number of players</p>
                    </OptionHeader>
                    <OptionBody>
                        <HStack {...group}>
                            {players.map((value) => {
                                const radio = getRadioProps({ value })
                                return (
                                    <RadioCard key={value} {...radio}>
                                        {value}
                                    </RadioCard>
                                )
                            })}
                        </HStack>
                    </OptionBody>
                </Option>
                <Button onClick={createRoom}>Create Room</Button>
            </Container>
        </>
    )
}