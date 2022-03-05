import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  width: 350px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const CustomHeader = styled.div`
  padding: var(--padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
`;

const CustomBody = styled.div`
  padding: var(--padding);
`;

const CustomActions = styled.div`
padding: var(--padding);
`;

type ListProps = {
  background?: string;
  display?: string;
  width?: number;
}

export const List: FunctionComponent<ListProps> = ({ children, background, display, width }) => {
  return (
    <Wrapper style={{ background, display, width }}>
      {children}
    </Wrapper>
  )
}

export const ListActions = ({ children }: any) => {
  return (
    <CustomActions>
      {children}
    </CustomActions>
  )
}

export const ListHeader = ({ children }: any) => {
  return (
    <CustomHeader>
      {children}
    </CustomHeader>
  )
}

export const ListBody = ({ children }: any) => {
  return (
    <CustomBody>
      {children}
    </CustomBody>
  )
}
