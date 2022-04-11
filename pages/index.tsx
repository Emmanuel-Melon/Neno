import React, { useEffect } from "react";
import type { NextPage } from "next";
import { withRouter, useRouter } from "next/router";

import Layout from "../src/layout/layout";
import { GameConsumer, GameProvider } from "../src/providers/game";
import { GuestConsumer, GuestProvider } from "../src/providers/guest";
import { Game } from "../src/Game/Game";
import { getSession, useSession } from "next-auth/react";

const Home: NextPage = (props) => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/auth/signin");
    }
  }, []);
  return (
    <GameProvider>
      <GuestProvider guest={props?.router?.query}>
        <GuestConsumer>
          {() => (
            <GameConsumer>
              {(value) => (
                <Layout>
                  <Game context={value} />
                </Layout>
              )}
            </GameConsumer>
          )}
        </GuestConsumer>
      </GuestProvider>
    </GameProvider>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: { session }, // Will be passed to the page component as props
  };
}

export default withRouter(Home);
