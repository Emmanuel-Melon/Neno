import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const App = () => {
  // hooks
  const router = useRouter();

  // rest of component
};

export async function getServerSideProps(context) {
  // const session: { user: UserSession } = await getSession(context)
  return {
    props: {},
  };
}
