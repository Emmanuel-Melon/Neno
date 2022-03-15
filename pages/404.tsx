import type { NextPage } from "next";
import { Card } from "../src/components/ui/card";
import Layout from "../src/layout/layout";
import { Heading, Avatar, Text, Button } from "@chakra-ui/react";

const NotFoundPage: NextPage = () => {
  return (
    <Layout>
      <Card>
        <Avatar
          src="/images/flame-artificial-intelligence-1.svg"
          width="150"
          height="150"
          border="solid 5px rgba(240,246,238,1)"
        />
        <Heading as="h1" size="lg" color="brand.primary" fontSize="4xl">
          Oh No!
        </Heading>
        <Text color="brand.secondary">The page you're looking for!!</Text>
        <Button variant="ghost" color="brand.primary">
          Go back
        </Button>
      </Card>
    </Layout>
  );
};

export default NotFoundPage;
