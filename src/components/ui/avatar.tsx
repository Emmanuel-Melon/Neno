import { FunctionComponent } from "react";
import styled from "styled-components";

const Figure = styled.figure`
  backgorund: var(--background);
  border-radius: 50%;
  box-shadow: var(--box-shadow);
`;

const Img = styled.img`
  border-radius: 50%;
`;

type AvatarProps = {
  alt?: string
  src?: string
}

export const Avatar: FunctionComponent<AvatarProps> = (props) => {
  return (
    <Figure {...props} >
      <Img src={props?.src ? props.src : "A" } alt={props?.alt} />
    </Figure>
  )
}