import React from "react";
import styled from 'styled-components'
import { useRouter } from "next/router";

const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: var(--padding);
`

export default function Navbar() {
  const router = useRouter()
  return (
    <header>
      <nav>
        <Nav>
          <li onClick={() => router.back()}>Back</li>
          <li>Exit Game</li>
          <li>Players</li>
        </Nav>
      </nav>
    </header>
  )
}