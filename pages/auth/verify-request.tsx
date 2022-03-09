import type { NextPage } from "next";
import Layout from "../../src/layout/layout";

import { Flex } from "@chakra-ui/react";

const VerifyRequestPage: NextPage = () => {
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

export default VerifyRequestPage;
