export type Game = {
  rounds?: any;
  players?: any;
  letters?: any;
  winner?: null;
  leaderBoard?: any;
};

export interface GameMenuPlayType {
  type: `CLICK_PLAY`;
}

export interface GameMenuPlayType {
  type: `CLICK_PLAY`;
}

export interface GameMenuPlayType {
  type: `CLICK_PLAY`;
}

export interface AnswerSubmittedType {
  type: `ANSWERS_SUBMITED`;
}

export interface PlayerLeftRoomType {
  type: `PLAYER_LEFT_ROOM `;
}

export interface PlayerLeftGameType {
  type: `PLAYER_LEFT_GAME`;
}

export interface PlayerEnteredRoom {
  type: `PLAYER_ENTERED_ROOM`;
}

export interface PlayerKickedFromRoomType {
  type: `PLAYER_KICKED_FROM_ROOM`;
}

export interface PlayerBannedFromRoomType {
  type: `PLAYER_BANNED_FROM_ROOM`;
}

export interface PlayerToNextRoundType {
  type: `PLAYER_TO_NEXT_ROUND`;
}

export interface PlayerWonRoundType {
  type: `PLAYER_WON_ROUND`;
}

export interface PlayerLostRoundType {
  type: `PLAYER_LOST_ROUND`;
}

export interface PlayerWonGameType {
  type: `PLAYER_WON_GAME`;
}

export type GameEventType =
  | AnswerSubmittedType
  | PlayerBannedFromRoomType
  | PlayerEnteredRoom
  | PlayerKickedFromRoomType
  | PlayerLeftGameType
  | PlayerLeftRoomType
  | PlayerLostRoundType
  | PlayerToNextRoundType
  | PlayerWonGameType
  | PlayerWonRoundType
  | GameMenuType;

export type GameStateType = {
  context: null;
  value:
    | `home`
    | `playing`
    | `playing.level1`
    | `playing.level2`
    | `playing.level3`
    | `gameOver`
    | `gameComplete`;
};
