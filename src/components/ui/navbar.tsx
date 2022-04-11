import React, { useContext } from "react";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  forwardRef,
  ChakraComponent,
  UseSliderProps,
  background,
} from "@chakra-ui/react";
import { CustomButton } from "./button";
import { GameContext } from "../../providers/game";
import { useRouter } from "next/router";
import Link from "next/link";

const User = forwardRef((props, ref) => {
  const { gameService } = useContext(GameContext);
  return (
    <Button
      bg="brand.secondary"
      color="brand.white"
      borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
      p="2"
      _hover={{
        background: "brand.accent",
        color: "brand.white",
      }}
      {...props}
      _focus={{
        outline: "none",
        boxShadow: "none",
      }}
      leftIcon={
        <Avatar
          width="30"
          height="30"
          bg="brand.secondary"
          src={
            gameService?.state?.context?.playerImage
              ? gameService?.state?.context?.playerImage
              : gameService?.state?.context?.playerName || ""
          }
        />
      }
      ref={ref}
    >
      {gameService?.state?.context?.playerName
        ? gameService?.state?.context?.playerName
        : gameService?.state?.context?.playerName || "Guest User"}
    </Button>
  );
});

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  const handleBackNavigation = () => {
    router.back();
  };

  return (
    <header style={{ width: "100%" }}>
      <nav>
        <Flex
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          p="2"
        >
          <CustomButton color="brand.primary" onClick={handleBackNavigation}>
            Back
          </CustomButton>
          <Flex>
            <Menu>
              <MenuButton
                alignItems="center"
                py="1"
                px="2"
                as={User}
                _expanded={{ bg: "brand.accent" }}
                _focus={{
                  outline: "none",
                  boxShadow: "none",
                  background: "red",
                }}
              />
              <MenuList
                border="border.primary"
                boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
              >
                <MenuItem>
                  <Link href="/profile">Profile</Link>
                </MenuItem>
                <MenuItem>Invite friends</MenuItem>
                <MenuItem>
                  <Link href="/profile">Settings</Link>
                </MenuItem>
                {session ? <MenuItem>Logout</MenuItem> : null}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </nav>
    </header>
  );
}
