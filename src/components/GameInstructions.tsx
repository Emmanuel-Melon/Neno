import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: var(--padding);
    box-shadow: var(--box-shadow);
`

const Examples = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: var(--padding);
    border: solid 0.15rem var(--grey-background);
    border-radius: var(--border-radius);
`

const Letter = styled.h5`
    padding: var(--padding);
    text-align: center;
    margin: 0 auto;
    border-radius: var(--border-radius);
    font-size: 2rem;
`

const Label = styled.p`
    color: var(--primary-color);
`

const OptionsHeader = styled.div`
    text-align: center;

    h3 {
        color: var(--primary-color);
        font-size: 2rem;
    }
`

export const GameInstructions = () => {
    return (
        <Container>
            <OptionsHeader>
                <h3>How to play</h3>
                <p>Players are given a letter and are required to come up with words that start with that letter.</p>
            </OptionsHeader>
            <Letter>
                Letter S
            </Letter>
            <Examples>
                <div>
                    <Label>Country</Label>
                    <p>Singapore</p>
                </div>
                <div>
                    <Label>Name</Label>
                    <p>Samantha</p>
                </div>
                <div>
                    <Label>Animal</Label>
                    <p>Shark</p>
                </div>
                <div>
                    <Label>Food</Label>
                    <p>Shrimp</p>
                </div>
                <div>
                    <Label>Object</Label>
                    <p>Sharpener</p>
                </div>
            </Examples>
        </Container>
    )
}