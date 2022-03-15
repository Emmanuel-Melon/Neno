import React from 'react'
import styled from 'styled-components'
import { Input } from '@chakra-ui/react'

import { useSession, signIn, signOut } from "next-auth/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'

const Container = styled.div`
    background: rgba(72, 70, 109, 1);
    padding: var(--padding);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    border: solid 0.10rem rgba(72, 70, 109, 0.5);
    color: var(--white);
    width: 30%;
`

const Auth = () => {

    const { data: session } = useSession()

    console.log(session)
    return (
        <Container>
            <div>
                <FormControl>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input id='password' type='password' />
                </FormControl>
                <button onClick={signIn}>Login</button>
                <button onClick={signOut}>Log Out</button>
            </div>
        </Container>
    )
}


export default function Login () {
    return (
        <div>
            <Auth />
        </div>
    )
}