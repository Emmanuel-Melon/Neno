import React, { useState, useCallback, useContext, useEffect } from "react";
import { Input, Flex, FormControl, Box } from "@chakra-ui/react";
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
            {categories &&
              categories.map(
                (category: Rooms_Word_Categories, index: number) => {
                  return (
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
                        value={answers[category.type].value}
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
                  );
                }
              )}
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" py="4" alignItems="center">
        <MyTimer minutes={minutes} seconds={seconds} />
        <Flex justifyContent="center">
          <CustomButton
            onClick={() => {
              submitAnswers(answers);
            }}
            disabled={won}
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
      </Flex>
      <CustomModal show={timeUp} close={closeModal}>
        <TimeUp />
      </CustomModal>
    </>
  );
};
