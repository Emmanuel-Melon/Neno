import { FunctionComponent } from "react";
import { Input } from '@chakra-ui/react'


type InputProps = {
  placeholder?: string,
  inputField?: string,
  id?: string,
  type?: string,
  icon?: string,
  label?: string,
  value?: string
}

export const TextInput: FunctionComponent<InputProps> = (props) => {
  return (
    <Input {...props}/>
  )
}