"use client";

import { Spinner } from "@/components/common/ui";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteButton = ({
  itemId,
  type,
}: {
  itemId: string;
  type: "author" | "publisher";
}) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAuthor = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`/api/${type}/${itemId}`);
      router.push(`/admin/${type}/all`);
      router.refresh();
    } catch (error) {
      setError(true);
      setIsDeleting(false);
    }
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button
            color="red"
            disabled={isDeleting}
            className="bg-red-500 hover:bg-red-400 hover:cursor-pointer transition"
          >
            Delete {type.slice(0, 1).toUpperCase() + type.slice(1)}
            {isDeleting && <Spinner />}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure want to delete this {type}? This action cannot be
            undone.
          </AlertDialog.Description>
          <Flex mt="4" gap="3">
            <AlertDialog.Cancel>
              <Button
                color="gray"
                variant="soft"
                className="bg-gray-100 hover:bg-gray-200 hover:cursor-pointer transition"
              >
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button
                color="red"
                onClick={handleDeleteAuthor}
                className="bg-red-500 hover:bg-red-400 hover:cursor-pointer transition"
              >
                Delete {type.slice(0, 1).toUpperCase() + type.slice(1)}
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This {type} could not be deleted
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            mt="2"
            onClick={() => setError(false)}
          >
            OK
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteButton;
