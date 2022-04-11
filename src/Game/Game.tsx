import { useSelector } from "@xstate/react";
import { useContext, useEffect } from "react";
import { useUpdateOnlineStatus } from "../hooks/users";
import { Rooms } from "../Rooms/Rooms";
import { GameLobby } from "./GameLobby";
import { GameMenu } from "./GameMenu";
import { GameMode } from "./GameMode";
import GameScreen from "./GameScreen";
import { GuestContext } from "../providers/guest";

type GameProps = {
  context: any;
};

export const Game = ({ context }: GameProps) => {
  const { gameService } = context;
  const { guest } = useContext(GuestContext);
  const { updateOnlineStatus } = useUpdateOnlineStatus();

  // selectors
  const modeSelector = (state: any) => state.matches("mode");
  const menuSelector = (state: any) => state.matches("home");
  const roomSelector = (state: any) => state.matches("rooms");
  const lobbySelector = (state: any) => state.matches("lobby");
  const gameScreenSelector = (state: any) => state.matches("started");

  const isMode = useSelector(gameService, modeSelector);
  const isMenu = useSelector(gameService, menuSelector);
  const isRooms = useSelector(gameService, roomSelector);
  const isLobby = useSelector(gameService, lobbySelector);
  const isGameScreen = useSelector(gameService, gameScreenSelector);

  /**
   *   useEffect(() => {
    // Every 20s, run a mutation to tell the backend that you're online
    updateOnlineStatus();
    setOnlineIndicator(setInterval(() => updateOnlineStatus(), 20000));

    return () => {
      // Clean up
      clearInterval(onlineIndicator);
    };
  }, []);
   */

  useEffect(() => {
    const items = {
      playerName: guest.username,
      playerId: guest.id,
      playerImage: guest.image,
    };
    gameService.send({
      type: "USER_ACTIVE",
      payload: {
        ...items,
      },
    });
  }, []);

  return (
    <>
      {isMenu ? <GameMenu /> : null}

      {isMode ? <GameMode /> : null}

      {isRooms ? <Rooms /> : null}

      {isLobby ? <GameLobby /> : null}

      {isGameScreen ? <GameScreen /> : null}
    </>
  );
};
