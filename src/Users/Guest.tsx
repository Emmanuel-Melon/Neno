import React, { useState } from "react";
import { Paper } from "../components/ui/paper";
import { Heading, Flex, Avatar, Input, Box, Text, Divider, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { avatars } from "../components/utils/avatars";
import { CustomButton } from "../components/ui/button";
import { useInsertNewUser } from "../hooks/users";
import gamerNamer from "gamer-namer";
import { useRouter } from "next/router";

export const Guest = () => {
  const [name, setName] = useState<string>(gamerNamer.generateName());
  const [avatar, setAvatar] = useState<string>("/images/avatars/icons8-naruto.svg");
  const { insertNewUser, loading, error } = useInsertNewUser();
  const hiddenFileInput = React.useRef(null);
  const router = useRouter();

  const guestIsReady = async () => {
    const newUser = await insertNewUser({
      username: name,
      image: avatar,
      guest: true
    });

    if (newUser) {
      router.push({
        pathname: '/',
        query: {
          ...newUser,
          name: "eman"
        }
      });
    }

  }

  const handleInputchange = (e: any) => {
    setName(e.target.value);
  };

  const uploadAvatar = (event) => {
    const fileUploaded = event.target.files[0];
  }

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <Paper width="700px">
        <Grid gap={6} templateColumns="repeat(3, 1fr)">
          <GridItem colSpan={1}>
            <Flex
              direction="column"
              gap={2}
              alignItems="center"
              p="4"
              justifyContent="center"
            >
              <Avatar
                src={avatar}
                width="100"
                height="100"
                border="border.primary"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                bg="transparent"
              />
              <Heading color="brand.secondary" as="h3" size="md">
                {name}
              </Heading>

              <Divider />
              <Text>Or</Text>
              <Input
                type="file"
                name="myImage"
                onChange={uploadAvatar}
                display="none"
                ref={hiddenFileInput}
              />
              <CustomButton onClick={handleClick} size="md">Upload Photo</CustomButton>
            </Flex>


          </GridItem>
          <GridItem colSpan={2}>
            <Flex direction="column" gap={4}>
              <Heading as="h3" size="sm" color="brand.primary">
                What shall we call you?
              </Heading>
              <Input
                type="text"
                placeholder="type message"
                bg="brand.grey"
                borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                border="border.primary"
                size="lg"
                value={name}
                variant="outline"
                focusBorderColor="brand.secondary"
                _placeholder={{ opacity: 0.4, color: "brand.secondary" }}
                onChange={handleInputchange}
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              />
              <Divider />
              <Flex direction="column" gap={4}>
                <Heading as="h3" size="sm" color="brand.primary">
                  Pick an avatar
                </Heading>
                <Flex
                  wrap="wrap"
                  gap={2}
                  p="2"
                  bg="brand.white"
                  borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                >
                  {avatars.map((avatar) => {
                    return <Box
                      border="border.secondary"
                      borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
                      cursor="pointer"
                      _hover={{
                        background: "brand.highlight"
                      }}
                      bg="brand.white"
                    >
                      <Image
                        width="60px"
                        height="60px"
                        src={avatar.src}
                        key={avatar.id}
                        onClick={() => { setAvatar(avatar.src) }}
                      />
                    </Box>
                  })}
                </Flex>
              </Flex>
              <Divider />
              <Text>You can change this later in the settings.</Text>
              <Flex gap={6}>
                <CustomButton
                  onClick={guestIsReady}
                  isLoading={loading}
                  loadingText="Creating..."
                  color="brand.primary"
                >
                  Ready
                </CustomButton>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Paper>
    </>
  );
};
