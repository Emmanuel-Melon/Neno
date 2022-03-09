import React from "react";
import { Input, Flex } from "@chakra-ui/react";
import { CustomButton } from "./ui/button";

import { useSession, signIn, signOut } from "next-auth/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export const Auth = () => {
  const { data: session } = useSession();

  return (
    <Flex>
      <div>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" />
        </FormControl>
        <CustomButton onClick={signIn}>Login</CustomButton>
        <CustomButton onClick={signOut}>Log Out</CustomButton>
      </div>
    </Flex>
  );
};
