import React, { useState } from "react";
import { Button } from "./ui/button";
import countries from '../../countries.json'
import { WordCategory } from './WordCategory'
import { ActivePlayers } from "./ActivePlayers";
import styled from 'styled-components'
import { useSession, signIn, signOut } from "next-auth/react"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Guesses = styled.div`
    flex: 2;
    padding: var(--padding);
`

const GuessCategories = styled.div`
    & div {

    }
`

type GameScreenProps = {
    players: any
}

const categories = [
    {
        id: 1,
        name: "Nature: (Animal, Plant)"
    },
    {
        id: 2,
        name: "Location: (Country, Capital City"
    },
    {
        id: 3,
        name: "Food"
    }
]


// show a list of answers when a users lose a game


export default function GameScreen({ players }: GameScreenProps) {
    const [attempt, setAttempt] = useState({
        category1: "",
        category2: "",
        category3: "",
        category4: "",
        category5: ""
    })

    const { data: session } = useSession()

    const onCategoryInputChange = (e: any) => {
        attempt[e.target.id] = e.target.value;
    }

    const submitAnswers = (e: any) => {
        e.preventDefault()
        const country = countries.find(country => {
            console.log(country.name.official);
            return country.name.official === "Sudan" || country.name.common === "Sudan"
        });
    }

    return (
        <Container>
            <Guesses>
                <GuessCategories>
                    <div>
                        <WordCategory categories={categories} onCategoryInputChange={onCategoryInputChange} session={session}/>
                    </div>
                </GuessCategories>
            </Guesses>
            <ActivePlayers players={players} />
        </Container>
    )
}