import FilterProvider from "@/components/pages/author-publisher/all/providers/FilterProvider";
import { Flex, Text } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import Alphabet from "./components/Alphabet";

const AllClientList = dynamic(() => import("./components/client-list"));
const AllAdminTable = dynamic(() => import("./components/admin-table"));

interface AllListPageProps {
  isAdmin?: boolean;
  type: "author" | "publisher";
}

const AllListPage = ({ isAdmin = false, type }: AllListPageProps) => {
  return (
    <Flex direction="column" gap="5">
      <Text size="5" className="font-bold text-cyan-700">
        All {type.slice(0, 1).toUpperCase() + type.slice(1)}s
      </Text>
      <FilterProvider>
        <Alphabet />
        {isAdmin ? (
          <AllAdminTable type={type} />
        ) : (
          <AllClientList type={type} />
        )}
      </FilterProvider>
    </Flex>
  );
};

export default AllListPage;
