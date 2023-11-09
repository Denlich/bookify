"use client";

import { Author, Publisher } from "@prisma/client";
import { Button, Dialog, Flex, TextFieldInput, Box } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect } from "react";
import cn from "classnames";
import { UseFormSetValue } from "react-hook-form";

interface ModalProps {
  type: "publisher" | "author";
  setValue: UseFormSetValue<{
    title: string;
    publisherId: string;
    authorId: string;
    description: string;
    type: "AUDIOBOOK" | "PAPERBACK" | "EBOOK";
    cost: number;
    image?: string | undefined;
  }>;
}

const Modal: React.FC<ModalProps> = ({ type, setValue }) => {
  const [entity, setEntity] = React.useState("");
  const [entityList, setEntityList] = React.useState<Author[] | Publisher[]>(
    []
  );

  useEffect(() => {
    const fetch = async () =>
      await axios.get(`/api/${type}${entity && `?name=${entity}`}`);
    fetch().then((res) => setEntityList(res.data));
  }, [entity, type]);

  return (
    <Dialog.Root>
      <Dialog.Trigger className="mt-[1.6rem]">
        <Button className="bg-cyan-500">Search for the {type}</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Search for the {type}</Dialog.Title>
        <TextFieldInput
          className="w-full"
          placeholder={"Search for the " + type}
          value={entity}
          onChange={(e) => setEntity(e.target.value)}
        />

        {entityList.length > 0 && (
          <Flex
            direction="column"
            className="border-solid border border-gray-400 rounded-lg mt-3"
          >
            {entityList.map((item) => (
              <Dialog.Close key={item.id}>
                <Box
                  className={cn("p-3 hover:bg-gray-100 hover:cursor-pointer", {
                    "border-solid border-t border-t-gray-400":
                      item.id !== entityList[0].id,
                  })}
                  onClick={() =>
                    setValue(
                      type === "author" ? "authorId" : "publisherId",
                      item.id!
                    )
                  }
                >
                  {item.name} {"surname" in item && item.surname}
                </Box>
              </Dialog.Close>
            ))}
          </Flex>
        )}

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button
              className="bg-white border-solid border border-gray-400 rounded-md text-gray-400 hover:cursor-pointer"
              onClick={() => {
                setEntity("");
                setEntityList([]);
              }}
            >
              Cancel
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default Modal;
