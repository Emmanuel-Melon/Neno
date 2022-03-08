import React from "react";
import styled from 'styled-components'
import { useRouter } from "next/router";
import MyTimer from '../Timer'
import { useSession, signIn, signOut } from "next-auth/react"

const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: var(--padding);
  background: #000;
  color: var(--primary-color);
`


export default function Navbar() {
  const router = useRouter()


  const { data: session } = useSession()
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120)

  function onExpire () {
    alert("hello")
  }
  return (
    <header>
      <nav>
        <Nav>
          {
            false ? (
              <>
                        <li>5/8</li>
          <MyTimer expiryTimestamp={new Date().setSeconds(time.getSeconds() + 120)} />
          <li>Round #1</li>
              </>
            ) : <h1>Frodle</h1>
          }
        </Nav>
      </nav>
    </header>
  )
}