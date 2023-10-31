"use client";

import { Spinner } from "@/components/common/ui";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DeleteAuthorButton = ({ authorId }: { authorId: string }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAuthor = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`/api/author/${authorId}`);
      router.push("/author/all");
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
            Delete Author
            {isDeleting && <Spinner />}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure want to delete this author? This action cannot be
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
                Delete Author
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This author could not be deleted
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

export default DeleteAuthorButton;
