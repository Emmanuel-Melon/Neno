// @ts-ignore
import type { NextPage } from "next";
import { getProviders, signIn } from "next-auth/react";
import Layout from "../../src/layout/layout";
import { Flex } from "@chakra-ui/layout";
import { Heading, VStack, Divider } from "@chakra-ui/react";
import { FiFacebook, FiMail } from "react-icons/fi";
import { Icon, createIcon } from "@chakra-ui/react";
import Image from "next/image";
import { CustomButton } from "../../src/components/ui/button";
import { useRouter } from "next/router";
import Link from "next/link";

const getButtonIcon = (provider: string) => {
  if (provider === "Facebook") {
    return (
      <Image
        alt="logo"
        src={"/icons/icons8-facebook.svg"}
        width="30"
        height="30"
      />
    );
  } else if (provider === "Google") {
    return (
      <Image alt="logo" src="/icons/icons8-google.svg" width="30" height="30" />
    );
  }
};

const signInPage: NextPage = ({ providers }: any) => {
  return (
    <Layout>
      <Flex
        width={"100%"}
        height={"100%"}
        minHeight={"100vh"}
        alignItems={"center"}
        p={["4%", "2%"]}
        direction={"column"}
      >
        <Flex
          direction="column"
          p="16"
          alignItems="center"
          style={{
            background: "rgba(72, 70, 109, 0.1)",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
            borderRadius: "1rem",
          }}
          width="400px"
        >
          <Heading as="h1" size="lg" color="#D1F5D3">
            Welcome to Frodle
          </Heading>

          {providers &&
            Object.values(providers).map((provider) => {
              return (
                <Flex
                  // @ts-ignore
                  key={provider?.name}
                  p="4"
                >
                  <VStack spacing={6}>
                    <CustomButton
                      onClick={() =>
                        // @ts-ignore
                        signIn(provider?.id)
                      }
                      icon={
                        // @ts-ignore
                        getButtonIcon(provider?.name)
                      }
                      size="lg"
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
          <Heading as="h3" size="md" color="#fff" marginBottom="4">
            Don't have an account?
          </Heading>
          <Link href="/auth/signup" passHref>
            <CustomButton>Join Now!</CustomButton>
          </Link>
        </Flex>
      </Flex>
    </Layout>
  );
};

export async function getServerSideProps(_context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signInPage;
