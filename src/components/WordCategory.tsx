import React from "react";
import { FiEyeOff } from "react-icons/fi";
import { Input, Flex } from "@chakra-ui/react";
import { CustomButton } from "./ui/button";
import Image from "next/image";
import { MyTimer } from "../components/Timer";

type WordCategoryProps = {
  onCategoryInputChange?: any;
  categories?: any;
  session: any;
};

const submitAnswers = (e: any) => {
  e.preventDefault();
};

export const WordCategory = ({
  categories,
  onCategoryInputChange,
  session,
}: WordCategoryProps) => {
  // must be set on the server in case users refresh the page
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120);

  // round is over when the timer reaches zero, move to the next round!
  return (
    <Flex>
      <Flex direction="column">
        <Flex
          style={{
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            borderRadius: "1rem",
            marginRight: "1rem",
          }}
        >
          <Image
            src="/images/icons8-t.svg"
            alt="avatar"
            height="150"
            width="150"
          />
        </Flex>
        <Flex justifyContent="center" marginTop="2">
          <MyTimer expiryTimestamp={time} />
        </Flex>
      </Flex>

      <Flex
        direction="column"
        justifyContent="space-between"
        height="200px"
        style={{
          borderRadius: "1rem",
          width: "400px",
        }}
      >
        {categories.map((category: any) => (
          <Flex key={category.id}>
            <Input
              placeholder={category.name}
              style={{ textAlign: "center" }}
              id={category.name}
              onChange={onCategoryInputChange}
            />
          </Flex>
        ))}
        <CustomButton onClick={submitAnswers}>Done</CustomButton>
      </Flex>
    </Flex>
  );
};
