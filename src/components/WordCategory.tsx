import React from 'react'
import { FiEyeOff } from 'react-icons/fi'
import styled from 'styled-components'
import { Input } from '@chakra-ui/react'
import { Button } from "./ui/button";

const GuessOption = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--padding) 0 0 0;
    margin: 0.5rem;
    border-radius: var(--border-radius);
    cursor: pointer;
`

const Answers = styled.div`
    flex: 1;

`

type WordCategoryProps = {
    onCategoryInputChange?: any;
    categories?: any
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
    width: 35%;
    padding: var(--padding);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    border: solid 0.10rem var(--white);
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WordCategory = ({ categories, onCategoryInputChange }: WordCategoryProps) => {
    return (
        <UserPane>

        <Player>
            <div style={{ width: "200px" }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png" alt="avatar" />
            </div>
            <div>
                <h3>Eman 🇸🇸</h3>
                <h3>Level 56</h3>
            </div>
        </Player>

        <Answers>
            <Title>Answers</Title>
            {
                categories.map((category: any) => (
                    <GuessOption key={category.id}>
                        <Input
                            placeholder={category.name}
                            style={{ textAlign: 'center' }}
                            id={category.name}
                            onChange={onCategoryInputChange}
                        />
                    </GuessOption>
                ))
            }
            <Button onClick={submitAnswers}>Done</Button>
        </Answers>
        </UserPane>
    )
}