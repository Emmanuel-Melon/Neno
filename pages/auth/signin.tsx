// @ts-ignore
import type { NextPage } from "next";
import { getProviders, signIn } from "next-auth/react";
import Layout from "../../src/layout/layout";
import { Flex } from "@chakra-ui/layout";
import { Heading, VStack, Divider, Avatar } from "@chakra-ui/react";
import Image from "next/image";
import { CustomButton } from "../../src/components/ui/button";
import Link from "next/link";
import { Card } from "../../src/components/ui/card";

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
  return (
    <Layout>
      <Card>
        <Avatar
          src="/images/flame-artificial-intelligence-1.svg"
          width="150"
          height="150"
          border="solid 5px rgba(240,246,238,1)"
        />
        <Heading as="h1" size="lg" fontSize="4xl" color="brand.primary">
          Play Neno
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
                    onClick={() =>
                      // @ts-ignore
                      signIn(provider?.id)
                    }
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
        <Heading as="h3" size="md" color="brand.secondary">
          Don't have an account?
        </Heading>
        <Link href="/auth/signup" passHref>
          <CustomButton
            icon={
              <Image
                alt="logo"
                src="/icons/icons8-sign-up.svg"
                width="30"
                height="30"
              />
            }
          >
            Join Now!
          </CustomButton>
        </Link>
      </Card>
    </Layout>
  );
};

export async function getServerSideProps(_context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignInPage;
