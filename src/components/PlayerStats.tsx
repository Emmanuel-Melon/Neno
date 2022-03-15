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
        p="8"
        alignItems="center"
        style={{
          background:
            "radial-gradient( circle farthest-corner at 10% 20%,  rgba(147,67,67,1) 0%, rgba(111,27,27,1) 90% )",
          boxShadow:
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
        }}
      >
        <Flex alignItems="center">
          <Flex direction="column" alignItems="center" p="4">
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
