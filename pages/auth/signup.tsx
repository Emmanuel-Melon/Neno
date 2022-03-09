import type { NextPage } from "next";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import Layout from "../../src/layout/layout";

const SignupPage: NextPage = () => {
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

export default SignupPage;
