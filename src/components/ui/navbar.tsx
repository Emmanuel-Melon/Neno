import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Avatar, Text, Flex, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <header>
      {session && session?.user ? (
        <nav>
          <Flex
            p="2"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex>
              <Menu>
                <MenuButton
                  borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                  alignItems="center"
                  bg="brand.white"
                  border="border.primary"
                  py="1"
                  px="2"
                  gap={2}
                  as={Button}
                >
                  {session?.user?.name}
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>How to play</MenuItem>
                  <MenuItem>Invite friends</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </nav>
      ) : null
      }
    </header>
  );
}
