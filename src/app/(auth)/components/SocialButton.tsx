import Google from "@/components/common/icons/Google";
import {
  Button,
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
  Text,
} from "@radix-ui/themes";
import React from "react";

declare const baseButtonPropDefs: {
  size: {
    type: "enum";
    values: readonly ["1", "2", "3", "4"];
    default: "2";
    responsive: true;
  };
  variant: {
    type: "enum";
    values: readonly [
      "classic",
      "solid",
      "soft",
      "surface",
      "outline",
      "ghost"
    ];
    default: "solid";
  };
  color: {
    type: "enum";
    values: readonly [
      "tomato",
      "red",
      "ruby",
      "crimson",
      "pink",
      "plum",
      "purple",
      "violet",
      "iris",
      "indigo",
      "blue",
      "cyan",
      "teal",
      "jade",
      "green",
      "grass",
      "brown",
      "orange",
      "sky",
      "mint",
      "lime",
      "yellow",
      "amber",
      "gold",
      "bronze",
      "gray"
    ];
    default:
      | "ruby"
      | "tomato"
      | "red"
      | "crimson"
      | "pink"
      | "plum"
      | "purple"
      | "violet"
      | "iris"
      | "indigo"
      | "blue"
      | "cyan"
      | "teal"
      | "jade"
      | "green"
      | "grass"
      | "brown"
      | "orange"
      | "sky"
      | "mint"
      | "lime"
      | "yellow"
      | "amber"
      | "gold"
      | "bronze"
      | "gray"
      | undefined;
  };
  highContrast: {
    type: "boolean";
    default: undefined;
  };
  radius: {
    type: "enum";
    values: readonly ["none", "small", "medium", "large", "full"];
    default: undefined;
  };
};

type BaseButtonOwnProps = GetPropDefTypes<typeof baseButtonPropDefs>;
interface BaseButtonProps
  extends PropsWithoutRefOrColor<"button">,
    MarginProps,
    BaseButtonOwnProps {
  asChild?: boolean;
}
declare const BaseButton: React.ForwardRefExoticComponent<
  Omit<BaseButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>
>;

interface Props extends React.ComponentPropsWithoutRef<typeof BaseButton> {}

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
