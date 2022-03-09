import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import Layout from "../../src/layout/layout";

const SignoutPage: NextPage = () => {
  return (
    <Layout>
      <Flex>
        <h3>Welcome to Frodle</h3>
        <p>Setup your profile and account!</p>
        <p>Skip</p>
      </Flex>
    </Layout>
  );
};

export default SignoutPage;
