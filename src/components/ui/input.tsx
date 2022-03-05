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

const FormControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 0.15rem var(--primary-color);
  padding: var(--padding);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
`;


type InputProps = {
  placeholder: string,
  onChange?: Function,
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

export const IconInput: FunctionComponent<InputProps> = (props) => {
  return (
    <FormControl>
      <label htmlFor="email">
        {props.icon}
      </label>
      <Input {...props} />
    </FormControl>
  )
}
