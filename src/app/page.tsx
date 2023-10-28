import authOptions from "@/auth/authOptions";
import { Text } from "@radix-ui/themes";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return <Text>Hello world! {session?.user.username}</Text>;
}
