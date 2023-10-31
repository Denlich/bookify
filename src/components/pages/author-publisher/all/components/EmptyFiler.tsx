import { Table, Text } from "@radix-ui/themes";
import React from "react";

const EmptyFiler = ({ isAdmin = false }: { isAdmin?: boolean }) => {
  if (isAdmin) {
    return (
      <Table.Row>
        <Table.Cell colSpan={3}>
          <Text className="text-center text-gray-500">
            There are no items with this letter
          </Text>
        </Table.Cell>
      </Table.Row>
    );
  }

  return (
    <Text className="text-center text-gray-500">
      There are no items with this letter
    </Text>
  );
};

export default EmptyFiler;
