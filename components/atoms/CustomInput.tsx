import React, { forwardRef, VFC } from "react";
import {
  Box,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputType = {
  error?: boolean;
  isRequired?: boolean;
  label: string;
  type: string;
  holder: string;
  register: UseFormRegisterReturn;
};

export const CustomInput: VFC<InputType> = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const handlePassword = () => {
    setShow(!show);
  };
  return (
    <>
      <FormControl
        isInvalid={props.error ? true : false}
        isRequired={props.isRequired}
      >
        <FormLabel>{props.label}</FormLabel>
        <InputGroup size="lg">
          <Input
            type={
              props.type === "password"
                ? show
                  ? "text"
                  : "password"
                : props.type
            }
            size="lg"
            variant="flushed"
            //react-hook-form
            placeholder={props.holder}
            {...props.register}
          />
          {props.type === "password" ? (
            <InputRightElement>
              <Box onClick={() => handlePassword()}>
                <Text
                  h="1.75rem"
                  size="lg"
                  bg="#fff"
                  mr="0.6em"
                  fontWeight="semibold"
                  _hover={{ cursor: "pointer", userSelect: "none" }}
                >
                  {show ? "hide" : "show"}
                </Text>
              </Box>
            </InputRightElement>
          ) : null}
        </InputGroup>
        <FormErrorMessage>{props.error}</FormErrorMessage>
      </FormControl>
    </>
  );
});
