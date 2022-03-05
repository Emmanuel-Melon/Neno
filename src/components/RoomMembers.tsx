import React from "react";
import styled from 'styled-components'
import { useRouter } from "next/router";
import { Avatar } from "@chakra-ui/react";

const MembersList = styled.ul`

`

const MemberCard = styled.div`
    padding: 1rem;
    background: var(--white);
    border: solid 0.15rem var(--primary-color);
    margin: 1rem;
    display: flex;
    align-items: center;

    & h3 {
        margin-left: 1rem;
    }
`

const Container = styled.div`
    padding: 1rem;
    width: 500px;
`

export default function RoomMembers({ members }: any) {
    const router = useRouter()
    return (
        <Container>
            <h3>Players</h3>
            <MembersList>
                {
                   members &&  members.map((member: any) => (
                        <MemberCard key={member.id}>
                            <Avatar />
                            <h3>{member.name}</h3>
                        </MemberCard>
                    ))
                }
            </MembersList>
        </Container>
    )
}