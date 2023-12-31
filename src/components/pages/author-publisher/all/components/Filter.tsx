"use client";

import { FilterContext } from "@/components/pages/author-publisher/all/providers/FilterProvider";
import { AuthorWithBooks } from "@/types/AuthorWithBooks";
import { PublisherWithBooks } from "@/types/PublisherWithBooks";
import dynamic from "next/dynamic";
import { useContext, useMemo } from "react";
import EmptyFiler from "./EmptyFiler";
import { filterByFirstLetter } from "./utils";

const TableRow = dynamic(() => import("./admin-table/TableRow"));
const ListItem = dynamic(() => import("./client-list/ListItem"));

const Filter = ({
  withBooks,
  isAdmin = false,
}: {
  withBooks: AuthorWithBooks[] | PublisherWithBooks[];
  isAdmin?: boolean;
}) => {
  const { letter } = useContext(FilterContext);

  const Item = useMemo(() => {
    if (!isAdmin) return ListItem;
    return TableRow;
  }, [isAdmin]);

  const filtered = filterByFirstLetter(withBooks, letter);

  if (filtered.length === 0) return <EmptyFiler isAdmin={isAdmin} />;

  return filtered.map((item: AuthorWithBooks | PublisherWithBooks) => (
    <Item item={item} key={item.id} />
  ));
};

export default Filter;
