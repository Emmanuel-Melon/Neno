import React from "react";
import { useRouter } from "next/router";
import { Container, Flex, Text, Switch } from "@chakra-ui/react";
import { MyTimer } from "../Timer";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  Button,
  MenuDivider,
} from "@chakra-ui/react";

import {
  FiChevronDown,
  FiSettings,
  FiUsers,
  FiLogOut,
  FiSunset,
} from "react-icons/fi";

export default function Navbar() {
  const router = useRouter();

  const { data: session } = useSession();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120);

  function onExpire() {
    // alert("hello")
  }
  return (
    <header>
      <nav>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          p="2"
          bg="#192965"
          color="white"
        >
          {false ? (
            <>
              <li>5/8</li>
              <MyTimer
                expiryTimestamp={new Date().setSeconds(time.getSeconds() + 120)}
              />
              <li>Round #1</li>
            </>
          ) : (
            <Text>Frodle</Text>
          )}
          {session ? (
            <Menu>
              <MenuButton
                color="#D1F5D3"
                as={Button}
                rightIcon={<FiChevronDown />}
                bg="rgba(25, 41, 101, 1)"
                _hover={{
                  background: "#65587F",
                }}
              >
                {session?.user?.name}
              </MenuButton>
              <MenuList
                color="#D1F5D3"
                bg="rgba(25, 41, 101, 1)"
                _hover={{
                  background: "rgba(25, 41, 101, 0.8)",
                }}
                _active={{
                  background: "rgba(25, 41, 101, 0.8)",
                }}
                _focus={{
                  background: "rgba(25, 41, 101, 0.8)",
                }}
              >
                <MenuItem
                  _active={{
                    background: "rgba(25, 41, 101, 0.8)",
                  }}
                  _focus={{
                    background: "rgba(25, 41, 101, 0.8)",
                  }}
                  icon={<FiSettings />}
                >
                  {" "}
                  Settings
                </MenuItem>
                <MenuItem
                  _active={{
                    background: "rgba(25, 41, 101, 0.8)",
                  }}
                  _focus={{
                    background: "rgba(25, 41, 101, 0.8)",
                  }}
                  icon={<FiUsers />}
                >
                  {" "}
                  Friends
                </MenuItem>
                <MenuItem
                  _active={{
                    background: "rgba(25, 41, 101, 0.8)",
                  }}
                  _focus={{
                    background: "rgba(25, 41, 101, 0.8)",
                  }}
                  icon={<FiSunset />}
                >
                  {" "}
                  Theme
                </MenuItem>
                <MenuItem
                  _active={{
                    background: "rgba(25, 41, 101, 0.8)",
                  }}
                  _focus={{
                    background: "rgba(25, 41, 101, 0.8)",
                  }}
                  icon={<FiLogOut />}
                >
                  {" "}
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          ) : null}
        </Flex>
      </nav>
    </header>
  );
}
