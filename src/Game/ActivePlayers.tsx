import { Paper } from "../components/ui/paper";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GameResults } from "./GameResults";
type ActivePlayersProps = {};

export const ActivePlayers = (props: ActivePlayersProps) => {
  const router = useRouter();
  useEffect(() => {}, [router.query.id]);
  return (
    <Paper>
      <GameResults results={false} />
    </Paper>
  );
};
