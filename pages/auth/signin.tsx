// @ts-ignore
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { getProviders, signIn, useSession } from "next-auth/react";
import Layout from "../../src/layout/layout";
import { Flex } from "@chakra-ui/layout";
import { Heading, VStack, Avatar, Text } from "@chakra-ui/react";
import Image from "next/image";
import { CustomButton } from "../../src/components/ui/button";
import { Card } from "../../src/components/ui/card";
import { useRouter } from "next/router";
import { CustomModal } from "../../src/components/ui/modal";
import { Guest } from "../../src/Users/Guest";
import { GameConsumer, GameProvider } from "../../src/providers/game";

const getButtonIcon = (provider: string) => {
  if (provider === "Facebook") {
    return (
      <Image
        alt="logo"
        src={"/icons/icons8-facebook (4).svg"}
        width="30"
        height="30"
      />
    );
  } else if (provider === "Google") {
    return (
      <Image
        alt="logo"
        src="/icons/icons8-google (3).svg"
        width="30"
        height="30"
      />
    );
  }
};

const SignInPage: NextPage = ({ providers }: any) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  function closeModal() {
    setModalOpen((currentState) => !currentState);
  }

  function openModal() {
    setModalOpen((currentState) => !currentState);
  }
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <>
      <GameProvider>
        <GameConsumer>
          {(value) => (
            <>
              <Layout>
                <Card width="350px">
                  <Avatar
                    src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189750/neno/letters/icons8-n.svg"
                    border="border.primary"
                    bg="brand.accent"
                    width="120"
                    height="120"
                  />
                  <Heading
                    as="h1"
                    size="lg"
                    fontSize="4xl"
                    color="brand.primary"
                  >
                    Neno
                  </Heading>
                  {providers &&
                    Object.values(providers).map((provider) => {
                      return (
                        <Flex
                          // @ts-ignore
                          key={provider?.name}
                          p="2"
                        >
                          <VStack spacing={1}>
                            <CustomButton
                              onClick={() => {
                                // @ts-ignore
                                signIn(provider?.id);
                              }}
                              icon={
                                // @ts-ignore
                                getButtonIcon(provider?.name)
                              }
                            >
                              Sign in with{" "}
                              {
                                // @ts-ignore
                                provider?.name
                              }
                            </CustomButton>
                          </VStack>
                        </Flex>
                      );
                    })}
                  <VStack gap={2} marginTop="2">
                    <Heading as="h3" size="md" color="brand.secondary">
                      Don't have an account?
                    </Heading>
                    <Text textAlign="center">
                      Game is under development. It's recommended to play as
                      guest.
                    </Text>
                    <CustomButton
                      onClick={openModal}
                      color="brand.white"
                      bg="brand.secondary"
                    >
                      Play as Guest
                    </CustomButton>
                  </VStack>
                </Card>
              </Layout>
              <CustomModal show={isModalOpen} close={closeModal}>
                <Guest />
              </CustomModal>
            </>
          )}
        </GameConsumer>
      </GameProvider>
    </>
  );
};

export async function getServerSideProps(_context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignInPage;
