import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.button`
    padding: var(--padding);
    background: var(--primary-color);
    outline: none;
    border: none;
    color: var(--white);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
    &:hover {
        background: var(--accent-color);
    }
    width: ${props => props.fullWidth ? '100%' : 'fit-content' }
`

type ButtonProps = {
    size?: string;
    onClick?: () => void;
    fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, onClick, fullWidth }) => {
    return (
        <Container onClick={onClick} fullWidth={fullWidth}>
            {children}
        </Container>
    )
}