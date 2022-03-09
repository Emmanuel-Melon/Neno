import { FunctionComponent } from "react";
import { Avatar } from '@chakra-ui/react'

export const CustomAvatar: FunctionComponent<AvatarProps> = (props) => {
  return (
    <Avatar src={props?.src ? props.src : "A" } />
  )
}