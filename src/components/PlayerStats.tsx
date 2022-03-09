import React from "react";
import { FiEyeOff } from "react-icons/fi";
import { Input, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Avatar, Tag } from "@chakra-ui/react";

type WordCategoryProps = {
  onCategoryInputChange?: any;
  categories?: any;
  session: any;
};

const submitAnswers = (e: any) => {
  e.preventDefault();
};

export const PlayerStats = () => {
  return (
    <Flex>
      <Flex
        direction="column"
        p="4"
        style={{
          background: "rgba(39, 35, 67, 0.5)",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
          borderRadius: "1rem",
        }}
        height="fit-content"
      >
        <Flex alignItems="center">
          <Flex
            direction="column"
            alignItems="center"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              borderRadius: "1rem",
            }}
            p="4"
            bg="rgba(25, 41, 101, 0.4)"
          >
            <Image
              src="/images/avatar1.png"
              alt="avatar"
              height="150"
              width="150"
            />
            <div>
              <Heading as="h3" size="sm" color="#fff">
                Emmanuel 🇸🇸
              </Heading>
              <Heading as="h5" size="sm" color="#D1F5D3">
                Level 56
              </Heading>
            </div>
          </Flex>
          <Flex
            direction="column"
            justifyContent="space-between"
            p="2"
            marginLeft="2"
          >
            <div>
              <Heading as="h5" size="sm" color="#D1F5D3">
                Bio
              </Heading>
              <Text color="#fff">Ain't nothing to it but to do it!</Text>
            </div>
            <Heading as="h5" size="sm" color="#D1F5D3" marginTop="2">
              Badges
            </Heading>
            <Flex
              justifyContent="space-between"
              p="2"
              style={{
                borderRadius: "1rem",
                cursor: "pointer",
              }}
            >
              <Avatar src="/images/conifer-trophy-1.svg" />
              <Avatar src="/images/geom-stamp.svg" />
              <Avatar src="/images/mirage-66.svg" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
