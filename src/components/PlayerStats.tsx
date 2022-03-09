import React from 'react'
import { FiEyeOff } from 'react-icons/fi'
import styled from 'styled-components'
import { Input } from '@chakra-ui/react'
import { Button } from "./ui/button";


type WordCategoryProps = {
    onCategoryInputChange?: any;
    categories?: any;
    session: any;
}

const submitAnswers = (e: any) => {
    e.preventDefault()
    const country = countries.find(country => {
        console.log(country.name.official);
        return country.name.official === "Sudan" || country.name.common === "Sudan"
    });
}

const Title = styled.h3`
    color: var(--primary-color);
    font-size: 92px;
    padding: 1rem;
    border-radius: 50%;
    text-align: center;
`

const UserPane = styled.div`
    display: flex;
    
    justify-content: space-between;
    align-items: center;

`


const Player = styled.div`
    width: 100%;
    padding: var(--padding);
    border-radius: var(--border-radius);
    margin: 1rem;
    display: flex;
    align-items: center;
    background: var(--secondary-color);
    color: var(--white);
`

const Stats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PlayerStats = () => {
    return (
        <UserPane>

        <Player>
            <Stats>
            <div style={{ width: "200px" }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png" alt="avatar" />
            </div>
            <div>
                <h1>Emmanuel 🇸🇸</h1>
                <h3>Level 56</h3>
            </div>
            </Stats>
            <div>
                <h4>Bio</h4>
                <p>Ain't nothing to it but to do it!</p>
            </div>
        </Player>
        </UserPane>
    )
}