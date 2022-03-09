import React from "react";
import styled from "styled-components"
import { FormControl, FormLabel, Switch } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

const Container = styled.div`

    box-shadow: var(--box-shadow);
    width: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Options = styled.div`
    margin: 1rem;
    width: 100%;
    padding: var(--padding);
`

export const GameOptions = () => {
    return (
        <Container>
            <div>
                <Options>
                    <Heading as='h3' size='md'>Appearance</Heading>
                    <FormControl display='flex' alignItems='center' justifyContent='space-between'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Dark Mode
                        </FormLabel>
                        <Switch id='email-alerts' />
                    </FormControl>
                </Options>
                <Options>
                    <Heading as='h3' size='md'>Audio</Heading>
                    <FormControl display='flex' alignItems='center' justifyContent='space-between'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Music
                        </FormLabel>
                        <Switch id='email-alerts' />
                    </FormControl>
                    <FormControl display='flex' alignItems='center' justifyContent='space-between'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Sound Effects
                        </FormLabel>
                        <Switch id='email-alerts' />
                    </FormControl>
                </Options>
            </div>
        </Container>
    )
}