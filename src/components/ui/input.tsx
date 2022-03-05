import { FunctionComponent } from "react";
import styled from "styled-components";

const Input = styled.input`
  outline: none;
  display: block;
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin-bottom: 1rem;
  border: solid 0.1rem var(--primary-color);
`;

type InputProps = {
  placeholder: string,
  inputField?: string,
  id?: string,
  type: string,
  icon?: string,
  label?: string,
  value?: string
}

export const TextInput: FunctionComponent<InputProps> = (props) => {
  return (
    <Input {...props}/>
  )
}