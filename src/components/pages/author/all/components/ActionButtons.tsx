"use client";

import { Pencil2Icon } from "@radix-ui/react-icons";
import { Flex, IconButton } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import DeleteAuthorButton from "./DeleteAuthorButton";

const ActionButtons = ({ authorId }: { authorId: string }) => {
  const router = useRouter();
  return (
    <Flex gap="3" align="center">
      <IconButton
        color="cyan"
        onClick={() => router.push(`/admin/author/${authorId}`)}
        className="hover:cursor-pointer"
      >
        <Pencil2Icon width="18" height="18" />
      </IconButton>
      <DeleteAuthorButton authorId={authorId} />
    </Flex>
  );
};

export default ActionButtons;
