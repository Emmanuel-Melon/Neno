import React, { FC } from "react";
import styled from "styled-components";


const Container = styled.div`
    padding: var(--padding);
    & h1 {
        text-align: center;
        color: var(--white);
    }

    & li {
        cursor: pointer;
        padding: var(--padding);
        border-radius: var(--border-radius);
        border-radius: var(--border-radius);
        color: #fff;
        background: var(--primary-color);
        box-shadow: var(--box-shadow);
        text-align: center;
        margin: 1rem;
        &:hover {
            background: var(--accent-color);
        }
    }
`

const Option = styled.div`
padding: var(--padding);
background: var(--white);
margin: 1rem;

`

const OptionBody = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const OptionHeader = styled.div`
    
`

type NewGameSettingsProps = {
    selectNumOfPlayers: () => void;
}

const CustomCheckbox = styled.div`
border-radius: var(--border-radius);
padding: var(--padding);
box-shadow: var(--box-shadow);
background: var(--accent-color);
margin: 1rem;
width: fit-content:
text-align: center;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
cursor: pointer;
`

const FormControl = styled.div`
`

export const NewGameSettings: FC<NewGameSettingsProps> = ({ selectNumOfPlayers }) => {
    return (
        <>
            <Container>
                <h1>Customize your game</h1>
                <Option>
                    <OptionHeader>
                        <p>Word categories</p>
                    </OptionHeader>
                    <OptionBody>
                        <FormControl onClick={selectNumOfPlayers}>
                            <label htmlFor="name">2</label>
                            <input type="text" id="name"  placeholder="A person's name"/>
                        </FormControl>
                        <FormControl onClick={selectNumOfPlayers}>
                        <label htmlFor="name">2</label>
                            <input type="text" id="name"  placeholder="A person's name"/>
                        </FormControl>
                        <FormControl onClick={selectNumOfPlayers}>
                        <label htmlFor="name">2</label>
                            <input type="text" id="name"  placeholder="A person's name"/>
                        </FormControl>
                        <FormControl onClick={selectNumOfPlayers}>
                        <label htmlFor="name">2</label>
                            <input type="text" id="name"  placeholder="A person's name"/>
                        </FormControl>
                        <FormControl onClick={selectNumOfPlayers}>
                        <label htmlFor="name">2</label>
                            <input type="text" id="name"  placeholder="A person's name"/>
                        </FormControl>
                    </OptionBody>
                </Option>
                <Option>
                    <OptionHeader>
                        <p>Number of players</p>
                    </OptionHeader>
                    <OptionBody>
                        <CustomCheckbox onClick={selectNumOfPlayers}>
                            <label htmlFor="two">2</label>
                            <input type="checkbox" id="two"  />
                        </CustomCheckbox>
                        <CustomCheckbox onClick={selectNumOfPlayers}>
                            <label htmlFor="two">4</label>
                            <input type="checkbox" id="two" onClick={selectNumOfPlayers} />
                        </CustomCheckbox>
                        <CustomCheckbox onClick={selectNumOfPlayers}>
                            <label htmlFor="two">6</label>
                            <input type="checkbox" id="two" onClick={selectNumOfPlayers} />
                        </CustomCheckbox>
                        <CustomCheckbox onClick={selectNumOfPlayers}>
                            <label htmlFor="two">8</label>
                            <input type="checkbox" id="two" onClick={selectNumOfPlayers} />
                        </CustomCheckbox>
                        <section onClick={selectNumOfPlayers}>
                            <input type="number" id="two" placeholder="Custom" />
                        </section>
                    </OptionBody>
                </Option>
            </Container>
        </>
    )
}