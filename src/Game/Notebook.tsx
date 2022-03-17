import React, { useState, useCallback } from "react";
import { Input, Flex, FormControl } from "@chakra-ui/react";
import Image from "next/image";
import { CustomButton } from "../components/ui/button";

type NotebookProps = {
  handleInputchange?: any;
  categories?: any;
  submitAnswers: any;
};

type Categories = {
  [key: string]: string;
};

// show an error if a user tries to submit anything that doesn't start with our target letter!
export const Notebook = ({ categories, submitAnswers }: NotebookProps) => {
  const [answers, setAnswers] = useState<Categories>({
    animal: "",
    food: "",
    name: "",
    city: "",
  });

  const handleInputchange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setAnswers((currentState) => {
        return {
          ...currentState,
          [name]: value,
        };
      });
    },
    []
  );

  return (
    <>
      <Flex width="600px">
        <Flex
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
          bg="#fff"
          width="100%"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          borderTop="border.top"
        >
          <Flex
            bg="repeating-linear-gradient(#F1EDE9, #F1EDE9 40px, #94ACD4 40px, #94ACD4 32px)"
            direction="column"
          >
            {categories.map((category: any, index: number) => (
              <Flex
                key={index}
                style={{
                  borderRadius: "1rem",
                  width: "600px",
                }}
              >
                <Input
                  autoComplete="off"
                  placeholder={category.type}
                  style={{
                    outline: "none",
                    borderWidth: "0px 0px 1px 0px",
                    borderColor: "#216583",
                    borderStyle: "dashed",
                    cursor: "pointer",
                    borderRadius: "0",
                  }}
                  value={answers[category.type]}
                  name={category.type}
                  id={category.type}
                  onChange={handleInputchange}
                  _hover={{
                    background: "#f0f0f0",
                  }}
                  _focus={{
                    outline: "none",
                  }}
                  _last={{
                    borderBottom: "solid 0.15rem red",
                  }}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex marginTop="8" justifyContent="center">
        <CustomButton
          onClick={() => {
            submitAnswers(answers);
          }}
          icon={
            <Image
              alt="logo"
              src={"/icons/icons8-ok.svg"}
              width="30"
              height="30"
            />
          }
        >
          Done
        </CustomButton>
      </Flex>
    </>
  );
};
