import React from "react";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { CustomButton } from "./button";

type DialogProps = {
  onClose: () => void;
  isOpen: boolean;
  action: () => void;
  heading: string;
  body: string;
  cancelText: string;
  actionText: string;
  loading?: boolean;
  loadingText?: string;
};

export const Dialog = ({
  onClose,
  isOpen,
  action,
  heading,
  body,
  actionText,
  cancelText,
  loading,
  loadingText,
}: DialogProps) => {
  const cancelRef = React.useRef();
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader
            fontSize="lg"
            fontWeight="bold"
            color="brand.accent"
          >
            {heading}
          </AlertDialogHeader>

          <AlertDialogBody>{body}</AlertDialogBody>

          <AlertDialogFooter gap={6}>
            <CustomButton ref={cancelRef} onClick={onClose}>
              {cancelText}
            </CustomButton>
            <CustomButton
              bg="border.danger"
              loadingText={loadingText}
              isLoading={loading}
              onClick={() => {
                action();
                if (loading === false) {
                  onClose();
                }
              }}
            >
              {actionText}
            </CustomButton>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
