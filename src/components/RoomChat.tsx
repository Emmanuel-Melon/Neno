import React from "react";
import styled from 'styled-components'
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { TextInput } from "./ui/input";

const Container = styled.div`
    width: 500px;
    background: var(--white);
    display: flex;
    margin: 1rem;
`

const Chatbox = styled.div`
    display: flex;
    align-self: flex-end;
    border-top: solid 0.15rem var(--accent-color);
    width: 100%;
    padding: var(--padding);
    justify-content: space-between;
`

export default function RoomChat() {
    const router = useRouter()
    return (
        <Container>
            <Chatbox>
                <TextInput type="text" placeholder="type message"/>
                <Button>Send</Button>
            </Chatbox>
        </Container>
    )
}