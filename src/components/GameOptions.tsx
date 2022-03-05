import React from "react";
import styled from "styled-components"
import { FormControl, FormLabel, Switch } from '@chakra-ui/react'

const Container = styled.div`
    padding: var(--padding);
    box-shadow: var(--box-shadow);
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & div h4 {
        color: var(--secondary-color);
    }
`

export const GameOptions = () => {
    return (
        <Container>
            <div>
                <h3>Game Options</h3>
                <div>
                    <h4>Appearance</h4>
                    <FormControl display='flex' alignItems='center' justifyContent='space-between'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Dark Mode
                        </FormLabel>
                        <Switch id='email-alerts' />
                    </FormControl>
                </div>
                <div>
                    <h4>Audio</h4>
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
                </div>
            </div>
        </Container>
    )
}