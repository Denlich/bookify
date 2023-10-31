"use client";

import { Pencil2Icon } from "@radix-ui/react-icons";
import { Flex, IconButton } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import DeleteButton from "./DeleteButton";

const ActionButtons = ({
  itemId,
  type,
}: {
  itemId: string;
  type: "author" | "publisher";
}) => {
  const router = useRouter();

  return (
    <Flex gap="3" align="center" justify="end">
      <IconButton
        color="cyan"
        onClick={() => router.push(`/admin/${type}/${itemId}`)}
        className="hover:cursor-pointer"
      >
        <Pencil2Icon width="18" height="18" />
      </IconButton>
      <DeleteButton itemId={itemId} type={type} />
    </Flex>
  );
};

export default ActionButtons;
