import React, { forwardRef } from "react";
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

const CustomInput = forwardRef((props, ref) => {
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
            //react-hook-form
            ref={ref}
            placeholder={props.holder}
            onChange={props.onChange}
            onBlur={props.onBlur}
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

export default CustomInput;
