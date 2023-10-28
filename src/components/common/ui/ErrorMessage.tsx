"use client";

import { FormMessage } from "@radix-ui/react-form";
import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return (
    <FormMessage className="FormMessage">
      <Text color="red" size="2">
        {children}
      </Text>
    </FormMessage>
  );
};

export default ErrorMessage;
