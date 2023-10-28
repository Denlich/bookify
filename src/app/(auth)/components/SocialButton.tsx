import Google from "@/components/common/icons/Google";
import { Button, Text } from "@radix-ui/themes";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const SocialButton = ({ ...props }: Props) => {
  return (
    <Button
      className="w-full bg-gray-50 py-3 hover:bg-cyan-50 hover:cursor-pointer"
      {...props}
    >
      <Google />
      <Text className="text-cyan-950">Google</Text>
    </Button>
  );
};

export default SocialButton;
