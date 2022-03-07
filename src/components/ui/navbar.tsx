import React from "react";
import styled from 'styled-components'
import { useRouter } from "next/router";
import MyTimer from '../Timer'

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

  const time = new Date();
  time.setSeconds(time.getSeconds() + 120)

  function onExpire () {
    alert("hello")
  }
  return (
    <header>
      <nav>
        <Nav>
          <li>5/8</li>
          <MyTimer expiryTimestamp={new Date().setSeconds(time.getSeconds() + 120)} />
          <li>Round #1</li>
        </Nav>
      </nav>
    </header>
  )
}