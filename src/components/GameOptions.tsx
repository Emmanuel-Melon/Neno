import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: var(--padding);
    box-shadow: var(--box-shadow);
    width: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & div h4 {
        color: var(--secondary-color);
    }
`

export const GameOptions = () => {
    return (
        <Container>
            <div>
                <h3>Game Options</h3>
                <div>
                    <h4>Appearance</h4>
                    <p>Dark mode</p>
                </div>
                <div>
                    <h4>Audio</h4>
                    <p>Sound Effects</p>
                    <p>Music</p>
                </div>
            </div>
        </Container>
    )
}