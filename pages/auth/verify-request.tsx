import type { NextPage } from "next";
import { Card } from "../../src/components/ui/card";
import Layout from "../../src/layout/layout";
import { Heading, Avatar, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import { CustomButton } from "../../src/components/ui/button";

const VerifyRequestPage: NextPage = () => {
  return (
    <Layout>
      <Card>
        <Avatar
          src="/images/flame-artificial-intelligence-1.svg"
          width='150'
          height='150'
          border='solid 5px rgba(240,246,238,1)'

        />
        <Heading as="h1" fontSize='4xl' size="lg" color="brand.primary">
          Welcome to Neno!
        </Heading>
        <Text color="brand.secondary">
          Get started by verifying your profile
        </Text>
        <CustomButton icon={
          <Image
            alt="logo"
            src="/icons/icons8-sign-up.svg"
            width="30"
            height="30"
          />
        }>
          Verify
        </CustomButton>
        <Text>You can skip this step!</Text>
        <Button variant='ghost' color='brand.primary'>Skip</Button>
      </Card>
    </Layout>
  );
};

export default VerifyRequestPage;
