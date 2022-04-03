// @ts-ignore
import { useEffect } from "react";
import type { NextPage } from "next";
import { getProviders, signIn, useSession } from "next-auth/react";
import Layout from "../../src/layout/layout";
import { Flex } from "@chakra-ui/layout";
import { Heading, VStack, Avatar } from "@chakra-ui/react";
import Image from "next/image";
import { CustomButton } from "../../src/components/ui/button";
import { Card } from "../../src/components/ui/card";
import { useRouter } from "next/router";

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
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if(session) {
      router.push("/");
    }
  }, [session]);

  return (
    <Layout>
      <Card>
        <Avatar
          src="/images/letters/icons8-n.svg"
          bg="brand.secondary"
          width="150"
          height="150"
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
                    onClick={() => {
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
        <Heading as="h3" size="md" color="brand.secondary">
          No passwords required
        </Heading>
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
