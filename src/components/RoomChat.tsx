import React from "react";
import styled from 'styled-components'
import { useRouter } from "next/router";


const Container = styled.div`
    padding: 1rem;
    width: 500px;
    background: green;
`

export default function RoomChat() {
    const router = useRouter()
    return (
        <Container>
            <h3>Players</h3>
        </Container>
    )
}