import React, { useState, useCallback, useContext, useEffect } from "react";
import { Input, Flex, FormControl, Box, Text, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { CustomButton } from "../components/ui/button";
import { MyTimer } from "../components/Timer";
import { Answers, Category } from "../Game/GameScreen";
import { useTimer } from "react-timer-hook";
import { GameContext } from "../providers/game";
import { TimeUp } from "./TimeUp";
import { CustomModal } from "../components/ui/modal";
import { Rooms_Word_Categories } from "../lib/graphql/globalTypes";

type NotebookProps = {
  categories?: any;
  loadingAnswers: boolean;
  roundExpiration: Date;
  submitAnswers: any;
  won: boolean;
};

export const Notebook = ({
  categories,
  submitAnswers,
  roundExpiration,
  won,
}: NotebookProps) => {
  const [answers, setAnswers] = useState<Answers>({
    animal: {
      value: "",
      category: "",
    },
    food: {
      value: "",
      category: "",
    },
    city: {
      value: "",
      category: "",
    },
  });

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [timeUp, setTimeUp] = useState<boolean>(false);
  const handleInputchange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setAnswers((currentState) => {
        return {
          ...currentState,
          [name]: {
            value,
            category: name,
          },
        };
      });
    },
    []
  );

  const onExpire = () => {
    setTimeUp(true);
  };

  function closeModal() {
    setModalOpen((currentState) => !currentState);
    setTimeUp(false);
  }

  roundExpiration.setSeconds(roundExpiration.getSeconds() + 40);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: roundExpiration,
    autoStart: false,
    onExpire: () => {
      // onExpire();
    },
  });

  if (!roundExpiration) {
    return <h3>Loading</h3>;
  }

  return (
    <>
      <VStack
        bg="repeating-linear-gradient(#F1EDE9, #F1EDE9 40px, #94ACD4 40px, #94ACD4 32px)"
        width="100%"
        borderRadius="4% 12% 10% 8% / 5% 5% 10% 8%"
      >
        {categories &&
          categories.map(
            (category: Rooms_Word_Categories, index: number) => {
              return (
                <Input
                  autoComplete="off"
                  placeholder={category.type}
                  borderStyle="dashed"
                  borderColor="#216583"
                  borderRadius="0"
                  cursor="pointer"
                  borderWidth="0px 0px 1px 0px"
                  value={answers[category.type].value}
                  name={category.type}
                  id={category.type}
                  width="100%"
                  onChange={handleInputchange}
                  _hover={{
                    background: "brand.grey",
                  }}
                  _focus={{
                    outline: "none",
                  }}
                />
              );
            }
          )}
      </VStack>
      <CustomModal show={timeUp} close={closeModal}>
        <TimeUp />
      </CustomModal>
    </>
  );
};
