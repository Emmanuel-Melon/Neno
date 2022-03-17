import React from "react";
import { Input } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const Auth = () => {
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
        <button>Login</button>
        <button>Log Out</button>
      </div>
    </Flex>
  );
};

export default function Login() {
  return (
    <div>
      <Auth />
    </div>
  );
}
