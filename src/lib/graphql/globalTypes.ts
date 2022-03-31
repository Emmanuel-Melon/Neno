export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  date: string;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]>;
  _gt?: InputMaybe<Scalars["Boolean"]>;
  _gte?: InputMaybe<Scalars["Boolean"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Boolean"]>;
  _lte?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Scalars["Boolean"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "animals" */
export type Animals = {
  __typename?: "animals";
  id: Scalars["uuid"];
  letter: Scalars["bpchar"];
  name: Scalars["String"];
  /** An object relationship */
  rooms_word_category: Rooms_Word_Categories;
  type: Rooms_Word_Categories_Enum;
};

/** aggregated selection of "animals" */
export type Animals_Aggregate = {
  __typename?: "animals_aggregate";
  aggregate?: Maybe<Animals_Aggregate_Fields>;
  nodes: Array<Animals>;
};

/** aggregate fields of "animals" */
export type Animals_Aggregate_Fields = {
  __typename?: "animals_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Animals_Max_Fields>;
  min?: Maybe<Animals_Min_Fields>;
};

/** aggregate fields of "animals" */
export type Animals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Animals_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "animals" */
export type Animals_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Animals_Max_Order_By>;
  min?: InputMaybe<Animals_Min_Order_By>;
};

/** input type for inserting array relation for remote table "animals" */
export type Animals_Arr_Rel_Insert_Input = {
  data: Array<Animals_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Animals_On_Conflict>;
};

/** Boolean expression to filter rows from the table "animals". All fields are combined with a logical 'AND'. */
export type Animals_Bool_Exp = {
  _and?: InputMaybe<Array<Animals_Bool_Exp>>;
  _not?: InputMaybe<Animals_Bool_Exp>;
  _or?: InputMaybe<Array<Animals_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  letter?: InputMaybe<Bpchar_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  rooms_word_category?: InputMaybe<Rooms_Word_Categories_Bool_Exp>;
  type?: InputMaybe<Rooms_Word_Categories_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "animals" */
export enum Animals_Constraint {
  /** unique or primary key constraint */
  AnimalsPkey = "animals_pkey",
}

/** input type for inserting data into table "animals" */
export type Animals_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  letter?: InputMaybe<Scalars["bpchar"]>;
  name?: InputMaybe<Scalars["String"]>;
  rooms_word_category?: InputMaybe<Rooms_Word_Categories_Obj_Rel_Insert_Input>;
  type?: InputMaybe<Rooms_Word_Categories_Enum>;
};

/** aggregate max on columns */
export type Animals_Max_Fields = {
  __typename?: "animals_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  letter?: Maybe<Scalars["bpchar"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "animals" */
export type Animals_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  letter?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Animals_Min_Fields = {
  __typename?: "animals_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  letter?: Maybe<Scalars["bpchar"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "animals" */
export type Animals_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  letter?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "animals" */
export type Animals_Mutation_Response = {
  __typename?: "animals_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Animals>;
};

/** on_conflict condition type for table "animals" */
export type Animals_On_Conflict = {
  constraint: Animals_Constraint;
  update_columns?: Array<Animals_Update_Column>;
  where?: InputMaybe<Animals_Bool_Exp>;
};

/** Ordering options when selecting data from "animals". */
export type Animals_Order_By = {
  id?: InputMaybe<Order_By>;
  letter?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  rooms_word_category?: InputMaybe<Rooms_Word_Categories_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: animals */
export type Animals_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "animals" */
export enum Animals_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Letter = "letter",
  /** column name */
  Name = "name",
  /** column name */
  Type = "type",
}

/** input type for updating data in table "animals" */
export type Animals_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  letter?: InputMaybe<Scalars["bpchar"]>;
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Rooms_Word_Categories_Enum>;
};

/** update columns of table "animals" */
export enum Animals_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Letter = "letter",
  /** column name */
  Name = "name",
  /** column name */
  Type = "type",
}

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["bpchar"]>;
  _gt?: InputMaybe<Scalars["bpchar"]>;
  _gte?: InputMaybe<Scalars["bpchar"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["bpchar"]>;
  _in?: InputMaybe<Array<Scalars["bpchar"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["bpchar"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["bpchar"]>;
  _lt?: InputMaybe<Scalars["bpchar"]>;
  _lte?: InputMaybe<Scalars["bpchar"]>;
  _neq?: InputMaybe<Scalars["bpchar"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["bpchar"]>;
  _nin?: InputMaybe<Array<Scalars["bpchar"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["bpchar"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["bpchar"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["bpchar"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["bpchar"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["bpchar"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["bpchar"]>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["date"]>;
  _gt?: InputMaybe<Scalars["date"]>;
  _gte?: InputMaybe<Scalars["date"]>;
  _in?: InputMaybe<Array<Scalars["date"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["date"]>;
  _lte?: InputMaybe<Scalars["date"]>;
  _neq?: InputMaybe<Scalars["date"]>;
  _nin?: InputMaybe<Array<Scalars["date"]>>;
};

/** columns and relationships of "games" */
export type Games = {
  __typename?: "games";
  createdAt: Scalars["timestamptz"];
  id: Scalars["uuid"];
  /** An object relationship */
  room: Rooms;
  roomId: Scalars["uuid"];
  roundDurationInSeconds: Scalars["Int"];
  roundsTotal?: Maybe<Scalars["Int"]>;
  /** An object relationship */
  user?: Maybe<Users>;
  winner?: Maybe<Scalars["uuid"]>;
};

/** aggregated selection of "games" */
export type Games_Aggregate = {
  __typename?: "games_aggregate";
  aggregate?: Maybe<Games_Aggregate_Fields>;
  nodes: Array<Games>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_Fields = {
  __typename?: "games_aggregate_fields";
  avg?: Maybe<Games_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Games_Max_Fields>;
  min?: Maybe<Games_Min_Fields>;
  stddev?: Maybe<Games_Stddev_Fields>;
  stddev_pop?: Maybe<Games_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Games_Stddev_Samp_Fields>;
  sum?: Maybe<Games_Sum_Fields>;
  var_pop?: Maybe<Games_Var_Pop_Fields>;
  var_samp?: Maybe<Games_Var_Samp_Fields>;
  variance?: Maybe<Games_Variance_Fields>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Games_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "games" */
export type Games_Aggregate_Order_By = {
  avg?: InputMaybe<Games_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Games_Max_Order_By>;
  min?: InputMaybe<Games_Min_Order_By>;
  stddev?: InputMaybe<Games_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Games_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Games_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Games_Sum_Order_By>;
  var_pop?: InputMaybe<Games_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Games_Var_Samp_Order_By>;
  variance?: InputMaybe<Games_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "games" */
export type Games_Arr_Rel_Insert_Input = {
  data: Array<Games_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Games_On_Conflict>;
};

/** aggregate avg on columns */
export type Games_Avg_Fields = {
  __typename?: "games_avg_fields";
  roundDurationInSeconds?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "games" */
export type Games_Avg_Order_By = {
  roundDurationInSeconds?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export type Games_Bool_Exp = {
  _and?: InputMaybe<Array<Games_Bool_Exp>>;
  _not?: InputMaybe<Games_Bool_Exp>;
  _or?: InputMaybe<Array<Games_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  roomId?: InputMaybe<Uuid_Comparison_Exp>;
  roundDurationInSeconds?: InputMaybe<Int_Comparison_Exp>;
  roundsTotal?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  winner?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "games" */
export enum Games_Constraint {
  /** unique or primary key constraint */
  GamePkey = "game_pkey",
}

/** input type for incrementing numeric columns in table "games" */
export type Games_Inc_Input = {
  roundDurationInSeconds?: InputMaybe<Scalars["Int"]>;
  roundsTotal?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "games" */
export type Games_Insert_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  roomId?: InputMaybe<Scalars["uuid"]>;
  roundDurationInSeconds?: InputMaybe<Scalars["Int"]>;
  roundsTotal?: InputMaybe<Scalars["Int"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  winner?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Games_Max_Fields = {
  __typename?: "games_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  roomId?: Maybe<Scalars["uuid"]>;
  roundDurationInSeconds?: Maybe<Scalars["Int"]>;
  roundsTotal?: Maybe<Scalars["Int"]>;
  winner?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "games" */
export type Games_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  roundDurationInSeconds?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
  winner?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Games_Min_Fields = {
  __typename?: "games_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  roomId?: Maybe<Scalars["uuid"]>;
  roundDurationInSeconds?: Maybe<Scalars["Int"]>;
  roundsTotal?: Maybe<Scalars["Int"]>;
  winner?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "games" */
export type Games_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  roundDurationInSeconds?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
  winner?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "games" */
export type Games_Mutation_Response = {
  __typename?: "games_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Games>;
};

/** on_conflict condition type for table "games" */
export type Games_On_Conflict = {
  constraint: Games_Constraint;
  update_columns?: Array<Games_Update_Column>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** Ordering options when selecting data from "games". */
export type Games_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room?: InputMaybe<Rooms_Order_By>;
  roomId?: InputMaybe<Order_By>;
  roundDurationInSeconds?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  winner?: InputMaybe<Order_By>;
};

/** primary key columns input for table: games */
export type Games_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** columns and relationships of "games_rounds" */
export type Games_Rounds = {
  __typename?: "games_rounds";
  /** An object relationship */
  game?: Maybe<Rooms_Games>;
  gameId?: Maybe<Scalars["uuid"]>;
  id: Scalars["uuid"];
  letterId?: Maybe<Scalars["bpchar"]>;
  /** An array relationship */
  letters: Array<Animals>;
  /** An aggregate relationship */
  letters_aggregate: Animals_Aggregate;
  playerId?: Maybe<Scalars["uuid"]>;
  /** An array relationship */
  players: Array<Users>;
  /** An aggregate relationship */
  players_aggregate: Users_Aggregate;
  /** An object relationship */
  room: Rooms;
  roomId: Scalars["uuid"];
  time?: Maybe<Scalars["date"]>;
  timeRemaining?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  winner?: Maybe<Users>;
  winnerId?: Maybe<Scalars["uuid"]>;
};

/** columns and relationships of "games_rounds" */
export type Games_RoundsLettersArgs = {
  distinct_on?: InputMaybe<Array<Animals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Animals_Order_By>>;
  where?: InputMaybe<Animals_Bool_Exp>;
};

/** columns and relationships of "games_rounds" */
export type Games_RoundsLetters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Animals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Animals_Order_By>>;
  where?: InputMaybe<Animals_Bool_Exp>;
};

/** columns and relationships of "games_rounds" */
export type Games_RoundsPlayersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "games_rounds" */
export type Games_RoundsPlayers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "games_rounds" */
export type Games_Rounds_Aggregate = {
  __typename?: "games_rounds_aggregate";
  aggregate?: Maybe<Games_Rounds_Aggregate_Fields>;
  nodes: Array<Games_Rounds>;
};

/** aggregate fields of "games_rounds" */
export type Games_Rounds_Aggregate_Fields = {
  __typename?: "games_rounds_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Games_Rounds_Max_Fields>;
  min?: Maybe<Games_Rounds_Min_Fields>;
};

/** aggregate fields of "games_rounds" */
export type Games_Rounds_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Games_Rounds_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "games_rounds" */
export type Games_Rounds_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Games_Rounds_Max_Order_By>;
  min?: InputMaybe<Games_Rounds_Min_Order_By>;
};

/** input type for inserting array relation for remote table "games_rounds" */
export type Games_Rounds_Arr_Rel_Insert_Input = {
  data: Array<Games_Rounds_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Games_Rounds_On_Conflict>;
};

/** Boolean expression to filter rows from the table "games_rounds". All fields are combined with a logical 'AND'. */
export type Games_Rounds_Bool_Exp = {
  _and?: InputMaybe<Array<Games_Rounds_Bool_Exp>>;
  _not?: InputMaybe<Games_Rounds_Bool_Exp>;
  _or?: InputMaybe<Array<Games_Rounds_Bool_Exp>>;
  game?: InputMaybe<Rooms_Games_Bool_Exp>;
  gameId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  letterId?: InputMaybe<Bpchar_Comparison_Exp>;
  letters?: InputMaybe<Animals_Bool_Exp>;
  playerId?: InputMaybe<Uuid_Comparison_Exp>;
  players?: InputMaybe<Users_Bool_Exp>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  roomId?: InputMaybe<Uuid_Comparison_Exp>;
  time?: InputMaybe<Date_Comparison_Exp>;
  timeRemaining?: InputMaybe<Timestamptz_Comparison_Exp>;
  winner?: InputMaybe<Users_Bool_Exp>;
  winnerId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "games_rounds" */
export enum Games_Rounds_Constraint {
  /** unique or primary key constraint */
  GamesRoundsPkey = "games_rounds_pkey",
}

/** input type for inserting data into table "games_rounds" */
export type Games_Rounds_Insert_Input = {
  game?: InputMaybe<Rooms_Games_Obj_Rel_Insert_Input>;
  gameId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  letterId?: InputMaybe<Scalars["bpchar"]>;
  letters?: InputMaybe<Animals_Arr_Rel_Insert_Input>;
  playerId?: InputMaybe<Scalars["uuid"]>;
  players?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  roomId?: InputMaybe<Scalars["uuid"]>;
  time?: InputMaybe<Scalars["date"]>;
  timeRemaining?: InputMaybe<Scalars["timestamptz"]>;
  winner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  winnerId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Games_Rounds_Max_Fields = {
  __typename?: "games_rounds_max_fields";
  gameId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  letterId?: Maybe<Scalars["bpchar"]>;
  playerId?: Maybe<Scalars["uuid"]>;
  roomId?: Maybe<Scalars["uuid"]>;
  time?: Maybe<Scalars["date"]>;
  timeRemaining?: Maybe<Scalars["timestamptz"]>;
  winnerId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "games_rounds" */
export type Games_Rounds_Max_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  letterId?: InputMaybe<Order_By>;
  playerId?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  timeRemaining?: InputMaybe<Order_By>;
  winnerId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Games_Rounds_Min_Fields = {
  __typename?: "games_rounds_min_fields";
  gameId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  letterId?: Maybe<Scalars["bpchar"]>;
  playerId?: Maybe<Scalars["uuid"]>;
  roomId?: Maybe<Scalars["uuid"]>;
  time?: Maybe<Scalars["date"]>;
  timeRemaining?: Maybe<Scalars["timestamptz"]>;
  winnerId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "games_rounds" */
export type Games_Rounds_Min_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  letterId?: InputMaybe<Order_By>;
  playerId?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  timeRemaining?: InputMaybe<Order_By>;
  winnerId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "games_rounds" */
export type Games_Rounds_Mutation_Response = {
  __typename?: "games_rounds_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Games_Rounds>;
};

/** input type for inserting object relation for remote table "games_rounds" */
export type Games_Rounds_Obj_Rel_Insert_Input = {
  data: Games_Rounds_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Games_Rounds_On_Conflict>;
};

/** on_conflict condition type for table "games_rounds" */
export type Games_Rounds_On_Conflict = {
  constraint: Games_Rounds_Constraint;
  update_columns?: Array<Games_Rounds_Update_Column>;
  where?: InputMaybe<Games_Rounds_Bool_Exp>;
};

/** Ordering options when selecting data from "games_rounds". */
export type Games_Rounds_Order_By = {
  game?: InputMaybe<Rooms_Games_Order_By>;
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  letterId?: InputMaybe<Order_By>;
  letters_aggregate?: InputMaybe<Animals_Aggregate_Order_By>;
  playerId?: InputMaybe<Order_By>;
  players_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  room?: InputMaybe<Rooms_Order_By>;
  roomId?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  timeRemaining?: InputMaybe<Order_By>;
  winner?: InputMaybe<Users_Order_By>;
  winnerId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: games_rounds */
export type Games_Rounds_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "games_rounds" */
export enum Games_Rounds_Select_Column {
  /** column name */
  GameId = "gameId",
  /** column name */
  Id = "id",
  /** column name */
  LetterId = "letterId",
  /** column name */
  PlayerId = "playerId",
  /** column name */
  RoomId = "roomId",
  /** column name */
  Time = "time",
  /** column name */
  TimeRemaining = "timeRemaining",
  /** column name */
  WinnerId = "winnerId",
}

/** input type for updating data in table "games_rounds" */
export type Games_Rounds_Set_Input = {
  gameId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  letterId?: InputMaybe<Scalars["bpchar"]>;
  playerId?: InputMaybe<Scalars["uuid"]>;
  roomId?: InputMaybe<Scalars["uuid"]>;
  time?: InputMaybe<Scalars["date"]>;
  timeRemaining?: InputMaybe<Scalars["timestamptz"]>;
  winnerId?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "games_rounds" */
export enum Games_Rounds_Update_Column {
  /** column name */
  GameId = "gameId",
  /** column name */
  Id = "id",
  /** column name */
  LetterId = "letterId",
  /** column name */
  PlayerId = "playerId",
  /** column name */
  RoomId = "roomId",
  /** column name */
  Time = "time",
  /** column name */
  TimeRemaining = "timeRemaining",
  /** column name */
  WinnerId = "winnerId",
}

/** select columns of table "games" */
export enum Games_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  RoomId = "roomId",
  /** column name */
  RoundDurationInSeconds = "roundDurationInSeconds",
  /** column name */
  RoundsTotal = "roundsTotal",
  /** column name */
  Winner = "winner",
}

/** input type for updating data in table "games" */
export type Games_Set_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  roomId?: InputMaybe<Scalars["uuid"]>;
  roundDurationInSeconds?: InputMaybe<Scalars["Int"]>;
  roundsTotal?: InputMaybe<Scalars["Int"]>;
  winner?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type Games_Stddev_Fields = {
  __typename?: "games_stddev_fields";
  roundDurationInSeconds?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "games" */
export type Games_Stddev_Order_By = {
  roundDurationInSeconds?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Games_Stddev_Pop_Fields = {
  __typename?: "games_stddev_pop_fields";
  roundDurationInSeconds?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "games" */
export type Games_Stddev_Pop_Order_By = {
  roundDurationInSeconds?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Games_Stddev_Samp_Fields = {
  __typename?: "games_stddev_samp_fields";
  roundDurationInSeconds?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "games" */
export type Games_Stddev_Samp_Order_By = {
  roundDurationInSeconds?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Games_Sum_Fields = {
  __typename?: "games_sum_fields";
  roundDurationInSeconds?: Maybe<Scalars["Int"]>;
  roundsTotal?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "games" */
export type Games_Sum_Order_By = {
  roundDurationInSeconds?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** update columns of table "games" */
export enum Games_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  RoomId = "roomId",
  /** column name */
  RoundDurationInSeconds = "roundDurationInSeconds",
  /** column name */
  RoundsTotal = "roundsTotal",
  /** column name */
  Winner = "winner",
}

/** aggregate var_pop on columns */
export type Games_Var_Pop_Fields = {
  __typename?: "games_var_pop_fields";
  roundDurationInSeconds?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "games" */
export type Games_Var_Pop_Order_By = {
  roundDurationInSeconds?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Games_Var_Samp_Fields = {
  __typename?: "games_var_samp_fields";
  roundDurationInSeconds?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "games" */
export type Games_Var_Samp_Order_By = {
  roundDurationInSeconds?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Games_Variance_Fields = {
  __typename?: "games_variance_fields";
  roundDurationInSeconds?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "games" */
export type Games_Variance_Order_By = {
  roundDurationInSeconds?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "animals" */
  delete_animals?: Maybe<Animals_Mutation_Response>;
  /** delete single row from the table: "animals" */
  delete_animals_by_pk?: Maybe<Animals>;
  /** delete data from the table: "games" */
  delete_games?: Maybe<Games_Mutation_Response>;
  /** delete single row from the table: "games" */
  delete_games_by_pk?: Maybe<Games>;
  /** delete data from the table: "games_rounds" */
  delete_games_rounds?: Maybe<Games_Rounds_Mutation_Response>;
  /** delete single row from the table: "games_rounds" */
  delete_games_rounds_by_pk?: Maybe<Games_Rounds>;
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<Rooms_Mutation_Response>;
  /** delete single row from the table: "rooms" */
  delete_rooms_by_pk?: Maybe<Rooms>;
  /** delete data from the table: "rooms_games" */
  delete_rooms_games?: Maybe<Rooms_Games_Mutation_Response>;
  /** delete single row from the table: "rooms_games" */
  delete_rooms_games_by_pk?: Maybe<Rooms_Games>;
  /** delete data from the table: "rooms_members" */
  delete_rooms_members?: Maybe<Rooms_Members_Mutation_Response>;
  /** delete single row from the table: "rooms_members" */
  delete_rooms_members_by_pk?: Maybe<Rooms_Members>;
  /** delete data from the table: "rooms_messages" */
  delete_rooms_messages?: Maybe<Rooms_Messages_Mutation_Response>;
  /** delete single row from the table: "rooms_messages" */
  delete_rooms_messages_by_pk?: Maybe<Rooms_Messages>;
  /** delete data from the table: "rooms_privacy" */
  delete_rooms_privacy?: Maybe<Rooms_Privacy_Mutation_Response>;
  /** delete single row from the table: "rooms_privacy" */
  delete_rooms_privacy_by_pk?: Maybe<Rooms_Privacy>;
  /** delete data from the table: "rooms_roles" */
  delete_rooms_roles?: Maybe<Rooms_Roles_Mutation_Response>;
  /** delete single row from the table: "rooms_roles" */
  delete_rooms_roles_by_pk?: Maybe<Rooms_Roles>;
  /** delete data from the table: "rooms_word_categories" */
  delete_rooms_word_categories?: Maybe<Rooms_Word_Categories_Mutation_Response>;
  /** delete single row from the table: "rooms_word_categories" */
  delete_rooms_word_categories_by_pk?: Maybe<Rooms_Word_Categories>;
  /** delete data from the table: "rounds_answers" */
  delete_rounds_answers?: Maybe<Rounds_Answers_Mutation_Response>;
  /** delete single row from the table: "rounds_answers" */
  delete_rounds_answers_by_pk?: Maybe<Rounds_Answers>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "animals" */
  insert_animals?: Maybe<Animals_Mutation_Response>;
  /** insert a single row into the table: "animals" */
  insert_animals_one?: Maybe<Animals>;
  /** insert data into the table: "games" */
  insert_games?: Maybe<Games_Mutation_Response>;
  /** insert a single row into the table: "games" */
  insert_games_one?: Maybe<Games>;
  /** insert data into the table: "games_rounds" */
  insert_games_rounds?: Maybe<Games_Rounds_Mutation_Response>;
  /** insert a single row into the table: "games_rounds" */
  insert_games_rounds_one?: Maybe<Games_Rounds>;
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<Rooms_Mutation_Response>;
  /** insert data into the table: "rooms_games" */
  insert_rooms_games?: Maybe<Rooms_Games_Mutation_Response>;
  /** insert a single row into the table: "rooms_games" */
  insert_rooms_games_one?: Maybe<Rooms_Games>;
  /** insert data into the table: "rooms_members" */
  insert_rooms_members?: Maybe<Rooms_Members_Mutation_Response>;
  /** insert a single row into the table: "rooms_members" */
  insert_rooms_members_one?: Maybe<Rooms_Members>;
  /** insert data into the table: "rooms_messages" */
  insert_rooms_messages?: Maybe<Rooms_Messages_Mutation_Response>;
  /** insert a single row into the table: "rooms_messages" */
  insert_rooms_messages_one?: Maybe<Rooms_Messages>;
  /** insert a single row into the table: "rooms" */
  insert_rooms_one?: Maybe<Rooms>;
  /** insert data into the table: "rooms_privacy" */
  insert_rooms_privacy?: Maybe<Rooms_Privacy_Mutation_Response>;
  /** insert a single row into the table: "rooms_privacy" */
  insert_rooms_privacy_one?: Maybe<Rooms_Privacy>;
  /** insert data into the table: "rooms_roles" */
  insert_rooms_roles?: Maybe<Rooms_Roles_Mutation_Response>;
  /** insert a single row into the table: "rooms_roles" */
  insert_rooms_roles_one?: Maybe<Rooms_Roles>;
  /** insert data into the table: "rooms_word_categories" */
  insert_rooms_word_categories?: Maybe<Rooms_Word_Categories_Mutation_Response>;
  /** insert a single row into the table: "rooms_word_categories" */
  insert_rooms_word_categories_one?: Maybe<Rooms_Word_Categories>;
  /** insert data into the table: "rounds_answers" */
  insert_rounds_answers?: Maybe<Rounds_Answers_Mutation_Response>;
  /** insert a single row into the table: "rounds_answers" */
  insert_rounds_answers_one?: Maybe<Rounds_Answers>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "animals" */
  update_animals?: Maybe<Animals_Mutation_Response>;
  /** update single row of the table: "animals" */
  update_animals_by_pk?: Maybe<Animals>;
  /** update data of the table: "games" */
  update_games?: Maybe<Games_Mutation_Response>;
  /** update single row of the table: "games" */
  update_games_by_pk?: Maybe<Games>;
  /** update data of the table: "games_rounds" */
  update_games_rounds?: Maybe<Games_Rounds_Mutation_Response>;
  /** update single row of the table: "games_rounds" */
  update_games_rounds_by_pk?: Maybe<Games_Rounds>;
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<Rooms_Mutation_Response>;
  /** update single row of the table: "rooms" */
  update_rooms_by_pk?: Maybe<Rooms>;
  /** update data of the table: "rooms_games" */
  update_rooms_games?: Maybe<Rooms_Games_Mutation_Response>;
  /** update single row of the table: "rooms_games" */
  update_rooms_games_by_pk?: Maybe<Rooms_Games>;
  /** update data of the table: "rooms_members" */
  update_rooms_members?: Maybe<Rooms_Members_Mutation_Response>;
  /** update single row of the table: "rooms_members" */
  update_rooms_members_by_pk?: Maybe<Rooms_Members>;
  /** update data of the table: "rooms_messages" */
  update_rooms_messages?: Maybe<Rooms_Messages_Mutation_Response>;
  /** update single row of the table: "rooms_messages" */
  update_rooms_messages_by_pk?: Maybe<Rooms_Messages>;
  /** update data of the table: "rooms_privacy" */
  update_rooms_privacy?: Maybe<Rooms_Privacy_Mutation_Response>;
  /** update single row of the table: "rooms_privacy" */
  update_rooms_privacy_by_pk?: Maybe<Rooms_Privacy>;
  /** update data of the table: "rooms_roles" */
  update_rooms_roles?: Maybe<Rooms_Roles_Mutation_Response>;
  /** update single row of the table: "rooms_roles" */
  update_rooms_roles_by_pk?: Maybe<Rooms_Roles>;
  /** update data of the table: "rooms_word_categories" */
  update_rooms_word_categories?: Maybe<Rooms_Word_Categories_Mutation_Response>;
  /** update single row of the table: "rooms_word_categories" */
  update_rooms_word_categories_by_pk?: Maybe<Rooms_Word_Categories>;
  /** update data of the table: "rounds_answers" */
  update_rounds_answers?: Maybe<Rounds_Answers_Mutation_Response>;
  /** update single row of the table: "rounds_answers" */
  update_rounds_answers_by_pk?: Maybe<Rounds_Answers>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_AnimalsArgs = {
  where: Animals_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Animals_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_GamesArgs = {
  where: Games_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Games_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Games_RoundsArgs = {
  where: Games_Rounds_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Games_Rounds_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_RoomsArgs = {
  where: Rooms_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Rooms_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Rooms_GamesArgs = {
  where: Rooms_Games_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Rooms_Games_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Rooms_MembersArgs = {
  where: Rooms_Members_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Rooms_Members_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Rooms_MessagesArgs = {
  where: Rooms_Messages_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Rooms_Messages_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Rooms_PrivacyArgs = {
  where: Rooms_Privacy_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Rooms_Privacy_By_PkArgs = {
  type: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Rooms_RolesArgs = {
  where: Rooms_Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Rooms_Roles_By_PkArgs = {
  role: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Rooms_Word_CategoriesArgs = {
  where: Rooms_Word_Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Rooms_Word_Categories_By_PkArgs = {
  type: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Rounds_AnswersArgs = {
  where: Rounds_Answers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Rounds_Answers_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsert_AnimalsArgs = {
  objects: Array<Animals_Insert_Input>;
  on_conflict?: InputMaybe<Animals_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Animals_OneArgs = {
  object: Animals_Insert_Input;
  on_conflict?: InputMaybe<Animals_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GamesArgs = {
  objects: Array<Games_Insert_Input>;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Games_OneArgs = {
  object: Games_Insert_Input;
  on_conflict?: InputMaybe<Games_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Games_RoundsArgs = {
  objects: Array<Games_Rounds_Insert_Input>;
  on_conflict?: InputMaybe<Games_Rounds_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Games_Rounds_OneArgs = {
  object: Games_Rounds_Insert_Input;
  on_conflict?: InputMaybe<Games_Rounds_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RoomsArgs = {
  objects: Array<Rooms_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_GamesArgs = {
  objects: Array<Rooms_Games_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_Games_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_Games_OneArgs = {
  object: Rooms_Games_Insert_Input;
  on_conflict?: InputMaybe<Rooms_Games_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_MembersArgs = {
  objects: Array<Rooms_Members_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_Members_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_Members_OneArgs = {
  object: Rooms_Members_Insert_Input;
  on_conflict?: InputMaybe<Rooms_Members_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_MessagesArgs = {
  objects: Array<Rooms_Messages_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_Messages_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_Messages_OneArgs = {
  object: Rooms_Messages_Insert_Input;
  on_conflict?: InputMaybe<Rooms_Messages_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_OneArgs = {
  object: Rooms_Insert_Input;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_PrivacyArgs = {
  objects: Array<Rooms_Privacy_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_Privacy_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_Privacy_OneArgs = {
  object: Rooms_Privacy_Insert_Input;
  on_conflict?: InputMaybe<Rooms_Privacy_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_RolesArgs = {
  objects: Array<Rooms_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_Roles_OneArgs = {
  object: Rooms_Roles_Insert_Input;
  on_conflict?: InputMaybe<Rooms_Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_Word_CategoriesArgs = {
  objects: Array<Rooms_Word_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_Word_Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rooms_Word_Categories_OneArgs = {
  object: Rooms_Word_Categories_Insert_Input;
  on_conflict?: InputMaybe<Rooms_Word_Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rounds_AnswersArgs = {
  objects: Array<Rounds_Answers_Insert_Input>;
  on_conflict?: InputMaybe<Rounds_Answers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Rounds_Answers_OneArgs = {
  object: Rounds_Answers_Insert_Input;
  on_conflict?: InputMaybe<Rounds_Answers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_AnimalsArgs = {
  _set?: InputMaybe<Animals_Set_Input>;
  where: Animals_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Animals_By_PkArgs = {
  _set?: InputMaybe<Animals_Set_Input>;
  pk_columns: Animals_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_GamesArgs = {
  _inc?: InputMaybe<Games_Inc_Input>;
  _set?: InputMaybe<Games_Set_Input>;
  where: Games_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Games_By_PkArgs = {
  _inc?: InputMaybe<Games_Inc_Input>;
  _set?: InputMaybe<Games_Set_Input>;
  pk_columns: Games_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Games_RoundsArgs = {
  _set?: InputMaybe<Games_Rounds_Set_Input>;
  where: Games_Rounds_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Games_Rounds_By_PkArgs = {
  _set?: InputMaybe<Games_Rounds_Set_Input>;
  pk_columns: Games_Rounds_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_RoomsArgs = {
  _inc?: InputMaybe<Rooms_Inc_Input>;
  _set?: InputMaybe<Rooms_Set_Input>;
  where: Rooms_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_By_PkArgs = {
  _inc?: InputMaybe<Rooms_Inc_Input>;
  _set?: InputMaybe<Rooms_Set_Input>;
  pk_columns: Rooms_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_GamesArgs = {
  _inc?: InputMaybe<Rooms_Games_Inc_Input>;
  _set?: InputMaybe<Rooms_Games_Set_Input>;
  where: Rooms_Games_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_Games_By_PkArgs = {
  _inc?: InputMaybe<Rooms_Games_Inc_Input>;
  _set?: InputMaybe<Rooms_Games_Set_Input>;
  pk_columns: Rooms_Games_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_MembersArgs = {
  _set?: InputMaybe<Rooms_Members_Set_Input>;
  where: Rooms_Members_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_Members_By_PkArgs = {
  _set?: InputMaybe<Rooms_Members_Set_Input>;
  pk_columns: Rooms_Members_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_MessagesArgs = {
  _set?: InputMaybe<Rooms_Messages_Set_Input>;
  where: Rooms_Messages_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_Messages_By_PkArgs = {
  _set?: InputMaybe<Rooms_Messages_Set_Input>;
  pk_columns: Rooms_Messages_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_PrivacyArgs = {
  _set?: InputMaybe<Rooms_Privacy_Set_Input>;
  where: Rooms_Privacy_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_Privacy_By_PkArgs = {
  _set?: InputMaybe<Rooms_Privacy_Set_Input>;
  pk_columns: Rooms_Privacy_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_RolesArgs = {
  _set?: InputMaybe<Rooms_Roles_Set_Input>;
  where: Rooms_Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_Roles_By_PkArgs = {
  _set?: InputMaybe<Rooms_Roles_Set_Input>;
  pk_columns: Rooms_Roles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_Word_CategoriesArgs = {
  _set?: InputMaybe<Rooms_Word_Categories_Set_Input>;
  where: Rooms_Word_Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Rooms_Word_Categories_By_PkArgs = {
  _set?: InputMaybe<Rooms_Word_Categories_Set_Input>;
  pk_columns: Rooms_Word_Categories_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Rounds_AnswersArgs = {
  _inc?: InputMaybe<Rounds_Answers_Inc_Input>;
  _set?: InputMaybe<Rounds_Answers_Set_Input>;
  where: Rounds_Answers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Rounds_Answers_By_PkArgs = {
  _inc?: InputMaybe<Rounds_Answers_Inc_Input>;
  _set?: InputMaybe<Rounds_Answers_Set_Input>;
  pk_columns: Rounds_Answers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** An array relationship */
  animals: Array<Animals>;
  /** An aggregate relationship */
  animals_aggregate: Animals_Aggregate;
  /** fetch data from the table: "animals" using primary key columns */
  animals_by_pk?: Maybe<Animals>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** An array relationship */
  games_rounds: Array<Games_Rounds>;
  /** An aggregate relationship */
  games_rounds_aggregate: Games_Rounds_Aggregate;
  /** fetch data from the table: "games_rounds" using primary key columns */
  games_rounds_by_pk?: Maybe<Games_Rounds>;
  /** An array relationship */
  rooms: Array<Rooms>;
  /** An aggregate relationship */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** An array relationship */
  rooms_games: Array<Rooms_Games>;
  /** An aggregate relationship */
  rooms_games_aggregate: Rooms_Games_Aggregate;
  /** fetch data from the table: "rooms_games" using primary key columns */
  rooms_games_by_pk?: Maybe<Rooms_Games>;
  /** An array relationship */
  rooms_members: Array<Rooms_Members>;
  /** An aggregate relationship */
  rooms_members_aggregate: Rooms_Members_Aggregate;
  /** fetch data from the table: "rooms_members" using primary key columns */
  rooms_members_by_pk?: Maybe<Rooms_Members>;
  /** An array relationship */
  rooms_messages: Array<Rooms_Messages>;
  /** An aggregate relationship */
  rooms_messages_aggregate: Rooms_Messages_Aggregate;
  /** fetch data from the table: "rooms_messages" using primary key columns */
  rooms_messages_by_pk?: Maybe<Rooms_Messages>;
  /** fetch data from the table: "rooms_privacy" */
  rooms_privacy: Array<Rooms_Privacy>;
  /** fetch aggregated fields from the table: "rooms_privacy" */
  rooms_privacy_aggregate: Rooms_Privacy_Aggregate;
  /** fetch data from the table: "rooms_privacy" using primary key columns */
  rooms_privacy_by_pk?: Maybe<Rooms_Privacy>;
  /** fetch data from the table: "rooms_roles" */
  rooms_roles: Array<Rooms_Roles>;
  /** fetch aggregated fields from the table: "rooms_roles" */
  rooms_roles_aggregate: Rooms_Roles_Aggregate;
  /** fetch data from the table: "rooms_roles" using primary key columns */
  rooms_roles_by_pk?: Maybe<Rooms_Roles>;
  /** fetch data from the table: "rooms_word_categories" */
  rooms_word_categories: Array<Rooms_Word_Categories>;
  /** fetch aggregated fields from the table: "rooms_word_categories" */
  rooms_word_categories_aggregate: Rooms_Word_Categories_Aggregate;
  /** fetch data from the table: "rooms_word_categories" using primary key columns */
  rooms_word_categories_by_pk?: Maybe<Rooms_Word_Categories>;
  /** fetch data from the table: "rounds_answers" */
  rounds_answers: Array<Rounds_Answers>;
  /** fetch aggregated fields from the table: "rounds_answers" */
  rounds_answers_aggregate: Rounds_Answers_Aggregate;
  /** fetch data from the table: "rounds_answers" using primary key columns */
  rounds_answers_by_pk?: Maybe<Rounds_Answers>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Query_RootAnimalsArgs = {
  distinct_on?: InputMaybe<Array<Animals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Animals_Order_By>>;
  where?: InputMaybe<Animals_Bool_Exp>;
};

export type Query_RootAnimals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Animals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Animals_Order_By>>;
  where?: InputMaybe<Animals_Bool_Exp>;
};

export type Query_RootAnimals_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};

export type Query_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};

export type Query_RootGames_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootGames_RoundsArgs = {
  distinct_on?: InputMaybe<Array<Games_Rounds_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Rounds_Order_By>>;
  where?: InputMaybe<Games_Rounds_Bool_Exp>;
};

export type Query_RootGames_Rounds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Rounds_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Rounds_Order_By>>;
  where?: InputMaybe<Games_Rounds_Bool_Exp>;
};

export type Query_RootGames_Rounds_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

export type Query_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

export type Query_RootRooms_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootRooms_GamesArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Games_Order_By>>;
  where?: InputMaybe<Rooms_Games_Bool_Exp>;
};

export type Query_RootRooms_Games_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Games_Order_By>>;
  where?: InputMaybe<Rooms_Games_Bool_Exp>;
};

export type Query_RootRooms_Games_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootRooms_MembersArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Members_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Members_Order_By>>;
  where?: InputMaybe<Rooms_Members_Bool_Exp>;
};

export type Query_RootRooms_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Members_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Members_Order_By>>;
  where?: InputMaybe<Rooms_Members_Bool_Exp>;
};

export type Query_RootRooms_Members_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootRooms_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Messages_Order_By>>;
  where?: InputMaybe<Rooms_Messages_Bool_Exp>;
};

export type Query_RootRooms_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Messages_Order_By>>;
  where?: InputMaybe<Rooms_Messages_Bool_Exp>;
};

export type Query_RootRooms_Messages_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootRooms_PrivacyArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Privacy_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Privacy_Order_By>>;
  where?: InputMaybe<Rooms_Privacy_Bool_Exp>;
};

export type Query_RootRooms_Privacy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Privacy_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Privacy_Order_By>>;
  where?: InputMaybe<Rooms_Privacy_Bool_Exp>;
};

export type Query_RootRooms_Privacy_By_PkArgs = {
  type: Scalars["String"];
};

export type Query_RootRooms_RolesArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Roles_Order_By>>;
  where?: InputMaybe<Rooms_Roles_Bool_Exp>;
};

export type Query_RootRooms_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Roles_Order_By>>;
  where?: InputMaybe<Rooms_Roles_Bool_Exp>;
};

export type Query_RootRooms_Roles_By_PkArgs = {
  role: Scalars["String"];
};

export type Query_RootRooms_Word_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Word_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Word_Categories_Order_By>>;
  where?: InputMaybe<Rooms_Word_Categories_Bool_Exp>;
};

export type Query_RootRooms_Word_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Word_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Word_Categories_Order_By>>;
  where?: InputMaybe<Rooms_Word_Categories_Bool_Exp>;
};

export type Query_RootRooms_Word_Categories_By_PkArgs = {
  type: Scalars["String"];
};

export type Query_RootRounds_AnswersArgs = {
  distinct_on?: InputMaybe<Array<Rounds_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rounds_Answers_Order_By>>;
  where?: InputMaybe<Rounds_Answers_Bool_Exp>;
};

export type Query_RootRounds_Answers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rounds_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rounds_Answers_Order_By>>;
  where?: InputMaybe<Rounds_Answers_Bool_Exp>;
};

export type Query_RootRounds_Answers_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

/** columns and relationships of "rooms" */
export type Rooms = {
  __typename?: "rooms";
  active: Scalars["Boolean"];
  capacity: Scalars["Int"];
  categories?: Maybe<Scalars["String"]>;
  createdAt: Scalars["timestamptz"];
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** An array relationship */
  games_rounds: Array<Games_Rounds>;
  /** An aggregate relationship */
  games_rounds_aggregate: Games_Rounds_Aggregate;
  /** An object relationship */
  host: Users;
  hostId: Scalars["uuid"];
  id: Scalars["uuid"];
  privacy: Rooms_Privacy_Enum;
  /** An array relationship */
  rooms_games: Array<Rooms_Games>;
  /** An aggregate relationship */
  rooms_games_aggregate: Rooms_Games_Aggregate;
  /** An array relationship */
  rooms_members: Array<Rooms_Members>;
  /** An aggregate relationship */
  rooms_members_aggregate: Rooms_Members_Aggregate;
  /** An array relationship */
  rooms_messages: Array<Rooms_Messages>;
  /** An aggregate relationship */
  rooms_messages_aggregate: Rooms_Messages_Aggregate;
  /** An object relationship */
  rooms_privacy: Rooms_Privacy;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  word_categories: Array<Rooms_Word_Categories>;
  /** An aggregate relationship */
  word_categories_aggregate: Rooms_Word_Categories_Aggregate;
};

/** columns and relationships of "rooms" */
export type RoomsGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** columns and relationships of "rooms" */
export type RoomsGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** columns and relationships of "rooms" */
export type RoomsGames_RoundsArgs = {
  distinct_on?: InputMaybe<Array<Games_Rounds_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Rounds_Order_By>>;
  where?: InputMaybe<Games_Rounds_Bool_Exp>;
};

/** columns and relationships of "rooms" */
export type RoomsGames_Rounds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Rounds_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Rounds_Order_By>>;
  where?: InputMaybe<Games_Rounds_Bool_Exp>;
};

/** columns and relationships of "rooms" */
export type RoomsRooms_GamesArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Games_Order_By>>;
  where?: InputMaybe<Rooms_Games_Bool_Exp>;
};

/** columns and relationships of "rooms" */
export type RoomsRooms_Games_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Games_Order_By>>;
  where?: InputMaybe<Rooms_Games_Bool_Exp>;
};

/** columns and relationships of "rooms" */
export type RoomsRooms_MembersArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Members_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Members_Order_By>>;
  where?: InputMaybe<Rooms_Members_Bool_Exp>;
};

/** columns and relationships of "rooms" */
export type RoomsRooms_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Members_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Members_Order_By>>;
  where?: InputMaybe<Rooms_Members_Bool_Exp>;
};

/** columns and relationships of "rooms" */
export type RoomsRooms_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Messages_Order_By>>;
  where?: InputMaybe<Rooms_Messages_Bool_Exp>;
};

/** columns and relationships of "rooms" */
export type RoomsRooms_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Messages_Order_By>>;
  where?: InputMaybe<Rooms_Messages_Bool_Exp>;
};

/** columns and relationships of "rooms" */
export type RoomsWord_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Word_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Word_Categories_Order_By>>;
  where?: InputMaybe<Rooms_Word_Categories_Bool_Exp>;
};

/** columns and relationships of "rooms" */
export type RoomsWord_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Word_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Word_Categories_Order_By>>;
  where?: InputMaybe<Rooms_Word_Categories_Bool_Exp>;
};

/** aggregated selection of "rooms" */
export type Rooms_Aggregate = {
  __typename?: "rooms_aggregate";
  aggregate?: Maybe<Rooms_Aggregate_Fields>;
  nodes: Array<Rooms>;
};

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_Fields = {
  __typename?: "rooms_aggregate_fields";
  avg?: Maybe<Rooms_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Rooms_Max_Fields>;
  min?: Maybe<Rooms_Min_Fields>;
  stddev?: Maybe<Rooms_Stddev_Fields>;
  stddev_pop?: Maybe<Rooms_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rooms_Stddev_Samp_Fields>;
  sum?: Maybe<Rooms_Sum_Fields>;
  var_pop?: Maybe<Rooms_Var_Pop_Fields>;
  var_samp?: Maybe<Rooms_Var_Samp_Fields>;
  variance?: Maybe<Rooms_Variance_Fields>;
};

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "rooms" */
export type Rooms_Aggregate_Order_By = {
  avg?: InputMaybe<Rooms_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rooms_Max_Order_By>;
  min?: InputMaybe<Rooms_Min_Order_By>;
  stddev?: InputMaybe<Rooms_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rooms_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rooms_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rooms_Sum_Order_By>;
  var_pop?: InputMaybe<Rooms_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rooms_Var_Samp_Order_By>;
  variance?: InputMaybe<Rooms_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rooms" */
export type Rooms_Arr_Rel_Insert_Input = {
  data: Array<Rooms_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};

/** aggregate avg on columns */
export type Rooms_Avg_Fields = {
  __typename?: "rooms_avg_fields";
  capacity?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "rooms" */
export type Rooms_Avg_Order_By = {
  capacity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export type Rooms_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  capacity?: InputMaybe<Int_Comparison_Exp>;
  categories?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  games?: InputMaybe<Games_Bool_Exp>;
  games_rounds?: InputMaybe<Games_Rounds_Bool_Exp>;
  host?: InputMaybe<Users_Bool_Exp>;
  hostId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  privacy?: InputMaybe<Rooms_Privacy_Enum_Comparison_Exp>;
  rooms_games?: InputMaybe<Rooms_Games_Bool_Exp>;
  rooms_members?: InputMaybe<Rooms_Members_Bool_Exp>;
  rooms_messages?: InputMaybe<Rooms_Messages_Bool_Exp>;
  rooms_privacy?: InputMaybe<Rooms_Privacy_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  word_categories?: InputMaybe<Rooms_Word_Categories_Bool_Exp>;
};

/** unique or primary key constraints on table "rooms" */
export enum Rooms_Constraint {
  /** unique or primary key constraint */
  RoomsPkey = "rooms_pkey",
}

/** columns and relationships of "rooms_games" */
export type Rooms_Games = {
  __typename?: "rooms_games";
  finishedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  room: Rooms;
  roomId: Scalars["uuid"];
  roundDuration: Scalars["Int"];
  roundsTotal?: Maybe<Scalars["Int"]>;
  startedAt?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  winner?: Maybe<Users>;
  winnerId?: Maybe<Scalars["uuid"]>;
};

/** aggregated selection of "rooms_games" */
export type Rooms_Games_Aggregate = {
  __typename?: "rooms_games_aggregate";
  aggregate?: Maybe<Rooms_Games_Aggregate_Fields>;
  nodes: Array<Rooms_Games>;
};

/** aggregate fields of "rooms_games" */
export type Rooms_Games_Aggregate_Fields = {
  __typename?: "rooms_games_aggregate_fields";
  avg?: Maybe<Rooms_Games_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Rooms_Games_Max_Fields>;
  min?: Maybe<Rooms_Games_Min_Fields>;
  stddev?: Maybe<Rooms_Games_Stddev_Fields>;
  stddev_pop?: Maybe<Rooms_Games_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rooms_Games_Stddev_Samp_Fields>;
  sum?: Maybe<Rooms_Games_Sum_Fields>;
  var_pop?: Maybe<Rooms_Games_Var_Pop_Fields>;
  var_samp?: Maybe<Rooms_Games_Var_Samp_Fields>;
  variance?: Maybe<Rooms_Games_Variance_Fields>;
};

/** aggregate fields of "rooms_games" */
export type Rooms_Games_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Games_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "rooms_games" */
export type Rooms_Games_Aggregate_Order_By = {
  avg?: InputMaybe<Rooms_Games_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rooms_Games_Max_Order_By>;
  min?: InputMaybe<Rooms_Games_Min_Order_By>;
  stddev?: InputMaybe<Rooms_Games_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rooms_Games_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rooms_Games_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rooms_Games_Sum_Order_By>;
  var_pop?: InputMaybe<Rooms_Games_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rooms_Games_Var_Samp_Order_By>;
  variance?: InputMaybe<Rooms_Games_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rooms_games" */
export type Rooms_Games_Arr_Rel_Insert_Input = {
  data: Array<Rooms_Games_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_Games_On_Conflict>;
};

/** aggregate avg on columns */
export type Rooms_Games_Avg_Fields = {
  __typename?: "rooms_games_avg_fields";
  roundDuration?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "rooms_games" */
export type Rooms_Games_Avg_Order_By = {
  roundDuration?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rooms_games". All fields are combined with a logical 'AND'. */
export type Rooms_Games_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Games_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Games_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Games_Bool_Exp>>;
  finishedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  roomId?: InputMaybe<Uuid_Comparison_Exp>;
  roundDuration?: InputMaybe<Int_Comparison_Exp>;
  roundsTotal?: InputMaybe<Int_Comparison_Exp>;
  startedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  winner?: InputMaybe<Users_Bool_Exp>;
  winnerId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "rooms_games" */
export enum Rooms_Games_Constraint {
  /** unique or primary key constraint */
  RoomsGamesPkey = "rooms_games_pkey",
}

/** input type for incrementing numeric columns in table "rooms_games" */
export type Rooms_Games_Inc_Input = {
  roundDuration?: InputMaybe<Scalars["Int"]>;
  roundsTotal?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "rooms_games" */
export type Rooms_Games_Insert_Input = {
  finishedAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  roomId?: InputMaybe<Scalars["uuid"]>;
  roundDuration?: InputMaybe<Scalars["Int"]>;
  roundsTotal?: InputMaybe<Scalars["Int"]>;
  startedAt?: InputMaybe<Scalars["timestamptz"]>;
  winner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  winnerId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Rooms_Games_Max_Fields = {
  __typename?: "rooms_games_max_fields";
  finishedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  roomId?: Maybe<Scalars["uuid"]>;
  roundDuration?: Maybe<Scalars["Int"]>;
  roundsTotal?: Maybe<Scalars["Int"]>;
  startedAt?: Maybe<Scalars["timestamptz"]>;
  winnerId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "rooms_games" */
export type Rooms_Games_Max_Order_By = {
  finishedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  roundDuration?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
  startedAt?: InputMaybe<Order_By>;
  winnerId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rooms_Games_Min_Fields = {
  __typename?: "rooms_games_min_fields";
  finishedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  roomId?: Maybe<Scalars["uuid"]>;
  roundDuration?: Maybe<Scalars["Int"]>;
  roundsTotal?: Maybe<Scalars["Int"]>;
  startedAt?: Maybe<Scalars["timestamptz"]>;
  winnerId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "rooms_games" */
export type Rooms_Games_Min_Order_By = {
  finishedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  roundDuration?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
  startedAt?: InputMaybe<Order_By>;
  winnerId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rooms_games" */
export type Rooms_Games_Mutation_Response = {
  __typename?: "rooms_games_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms_Games>;
};

/** input type for inserting object relation for remote table "rooms_games" */
export type Rooms_Games_Obj_Rel_Insert_Input = {
  data: Rooms_Games_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_Games_On_Conflict>;
};

/** on_conflict condition type for table "rooms_games" */
export type Rooms_Games_On_Conflict = {
  constraint: Rooms_Games_Constraint;
  update_columns?: Array<Rooms_Games_Update_Column>;
  where?: InputMaybe<Rooms_Games_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms_games". */
export type Rooms_Games_Order_By = {
  finishedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room?: InputMaybe<Rooms_Order_By>;
  roomId?: InputMaybe<Order_By>;
  roundDuration?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
  startedAt?: InputMaybe<Order_By>;
  winner?: InputMaybe<Users_Order_By>;
  winnerId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rooms_games */
export type Rooms_Games_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "rooms_games" */
export enum Rooms_Games_Select_Column {
  /** column name */
  FinishedAt = "finishedAt",
  /** column name */
  Id = "id",
  /** column name */
  RoomId = "roomId",
  /** column name */
  RoundDuration = "roundDuration",
  /** column name */
  RoundsTotal = "roundsTotal",
  /** column name */
  StartedAt = "startedAt",
  /** column name */
  WinnerId = "winnerId",
}

/** input type for updating data in table "rooms_games" */
export type Rooms_Games_Set_Input = {
  finishedAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  roomId?: InputMaybe<Scalars["uuid"]>;
  roundDuration?: InputMaybe<Scalars["Int"]>;
  roundsTotal?: InputMaybe<Scalars["Int"]>;
  startedAt?: InputMaybe<Scalars["timestamptz"]>;
  winnerId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type Rooms_Games_Stddev_Fields = {
  __typename?: "rooms_games_stddev_fields";
  roundDuration?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "rooms_games" */
export type Rooms_Games_Stddev_Order_By = {
  roundDuration?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rooms_Games_Stddev_Pop_Fields = {
  __typename?: "rooms_games_stddev_pop_fields";
  roundDuration?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "rooms_games" */
export type Rooms_Games_Stddev_Pop_Order_By = {
  roundDuration?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rooms_Games_Stddev_Samp_Fields = {
  __typename?: "rooms_games_stddev_samp_fields";
  roundDuration?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "rooms_games" */
export type Rooms_Games_Stddev_Samp_Order_By = {
  roundDuration?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Rooms_Games_Sum_Fields = {
  __typename?: "rooms_games_sum_fields";
  roundDuration?: Maybe<Scalars["Int"]>;
  roundsTotal?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "rooms_games" */
export type Rooms_Games_Sum_Order_By = {
  roundDuration?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** update columns of table "rooms_games" */
export enum Rooms_Games_Update_Column {
  /** column name */
  FinishedAt = "finishedAt",
  /** column name */
  Id = "id",
  /** column name */
  RoomId = "roomId",
  /** column name */
  RoundDuration = "roundDuration",
  /** column name */
  RoundsTotal = "roundsTotal",
  /** column name */
  StartedAt = "startedAt",
  /** column name */
  WinnerId = "winnerId",
}

/** aggregate var_pop on columns */
export type Rooms_Games_Var_Pop_Fields = {
  __typename?: "rooms_games_var_pop_fields";
  roundDuration?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "rooms_games" */
export type Rooms_Games_Var_Pop_Order_By = {
  roundDuration?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rooms_Games_Var_Samp_Fields = {
  __typename?: "rooms_games_var_samp_fields";
  roundDuration?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "rooms_games" */
export type Rooms_Games_Var_Samp_Order_By = {
  roundDuration?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rooms_Games_Variance_Fields = {
  __typename?: "rooms_games_variance_fields";
  roundDuration?: Maybe<Scalars["Float"]>;
  roundsTotal?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "rooms_games" */
export type Rooms_Games_Variance_Order_By = {
  roundDuration?: InputMaybe<Order_By>;
  roundsTotal?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "rooms" */
export type Rooms_Inc_Input = {
  capacity?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "rooms" */
export type Rooms_Insert_Input = {
  active?: InputMaybe<Scalars["Boolean"]>;
  capacity?: InputMaybe<Scalars["Int"]>;
  categories?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  games?: InputMaybe<Games_Arr_Rel_Insert_Input>;
  games_rounds?: InputMaybe<Games_Rounds_Arr_Rel_Insert_Input>;
  host?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  hostId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  privacy?: InputMaybe<Rooms_Privacy_Enum>;
  rooms_games?: InputMaybe<Rooms_Games_Arr_Rel_Insert_Input>;
  rooms_members?: InputMaybe<Rooms_Members_Arr_Rel_Insert_Input>;
  rooms_messages?: InputMaybe<Rooms_Messages_Arr_Rel_Insert_Input>;
  rooms_privacy?: InputMaybe<Rooms_Privacy_Obj_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  word_categories?: InputMaybe<Rooms_Word_Categories_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rooms_Max_Fields = {
  __typename?: "rooms_max_fields";
  capacity?: Maybe<Scalars["Int"]>;
  categories?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  hostId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "rooms" */
export type Rooms_Max_Order_By = {
  capacity?: InputMaybe<Order_By>;
  categories?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  hostId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** columns and relationships of "rooms_members" */
export type Rooms_Members = {
  __typename?: "rooms_members";
  id: Scalars["uuid"];
  joinedAt: Scalars["timestamptz"];
  leftAt?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  member: Users;
  /** An array relationship */
  members: Array<Users>;
  /** An aggregate relationship */
  members_aggregate: Users_Aggregate;
  role: Rooms_Roles_Enum;
  /** An object relationship */
  room?: Maybe<Rooms>;
  roomId: Scalars["uuid"];
  /** An object relationship */
  rooms_role: Rooms_Roles;
  userId: Scalars["uuid"];
};

/** columns and relationships of "rooms_members" */
export type Rooms_MembersMembersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "rooms_members" */
export type Rooms_MembersMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "rooms_members" */
export type Rooms_Members_Aggregate = {
  __typename?: "rooms_members_aggregate";
  aggregate?: Maybe<Rooms_Members_Aggregate_Fields>;
  nodes: Array<Rooms_Members>;
};

/** aggregate fields of "rooms_members" */
export type Rooms_Members_Aggregate_Fields = {
  __typename?: "rooms_members_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Rooms_Members_Max_Fields>;
  min?: Maybe<Rooms_Members_Min_Fields>;
};

/** aggregate fields of "rooms_members" */
export type Rooms_Members_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Members_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "rooms_members" */
export type Rooms_Members_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rooms_Members_Max_Order_By>;
  min?: InputMaybe<Rooms_Members_Min_Order_By>;
};

/** input type for inserting array relation for remote table "rooms_members" */
export type Rooms_Members_Arr_Rel_Insert_Input = {
  data: Array<Rooms_Members_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_Members_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rooms_members". All fields are combined with a logical 'AND'. */
export type Rooms_Members_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Members_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Members_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Members_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  joinedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  leftAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  member?: InputMaybe<Users_Bool_Exp>;
  members?: InputMaybe<Users_Bool_Exp>;
  role?: InputMaybe<Rooms_Roles_Enum_Comparison_Exp>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  roomId?: InputMaybe<Uuid_Comparison_Exp>;
  rooms_role?: InputMaybe<Rooms_Roles_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "rooms_members" */
export enum Rooms_Members_Constraint {
  /** unique or primary key constraint */
  RoomsMembersPkey = "rooms_members_pkey",
}

/** input type for inserting data into table "rooms_members" */
export type Rooms_Members_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  joinedAt?: InputMaybe<Scalars["timestamptz"]>;
  leftAt?: InputMaybe<Scalars["timestamptz"]>;
  member?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  members?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Rooms_Roles_Enum>;
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  roomId?: InputMaybe<Scalars["uuid"]>;
  rooms_role?: InputMaybe<Rooms_Roles_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Rooms_Members_Max_Fields = {
  __typename?: "rooms_members_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  joinedAt?: Maybe<Scalars["timestamptz"]>;
  leftAt?: Maybe<Scalars["timestamptz"]>;
  roomId?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "rooms_members" */
export type Rooms_Members_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  joinedAt?: InputMaybe<Order_By>;
  leftAt?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rooms_Members_Min_Fields = {
  __typename?: "rooms_members_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  joinedAt?: Maybe<Scalars["timestamptz"]>;
  leftAt?: Maybe<Scalars["timestamptz"]>;
  roomId?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "rooms_members" */
export type Rooms_Members_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  joinedAt?: InputMaybe<Order_By>;
  leftAt?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rooms_members" */
export type Rooms_Members_Mutation_Response = {
  __typename?: "rooms_members_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms_Members>;
};

/** on_conflict condition type for table "rooms_members" */
export type Rooms_Members_On_Conflict = {
  constraint: Rooms_Members_Constraint;
  update_columns?: Array<Rooms_Members_Update_Column>;
  where?: InputMaybe<Rooms_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms_members". */
export type Rooms_Members_Order_By = {
  id?: InputMaybe<Order_By>;
  joinedAt?: InputMaybe<Order_By>;
  leftAt?: InputMaybe<Order_By>;
  member?: InputMaybe<Users_Order_By>;
  members_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  room?: InputMaybe<Rooms_Order_By>;
  roomId?: InputMaybe<Order_By>;
  rooms_role?: InputMaybe<Rooms_Roles_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rooms_members */
export type Rooms_Members_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "rooms_members" */
export enum Rooms_Members_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  JoinedAt = "joinedAt",
  /** column name */
  LeftAt = "leftAt",
  /** column name */
  Role = "role",
  /** column name */
  RoomId = "roomId",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "rooms_members" */
export type Rooms_Members_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  joinedAt?: InputMaybe<Scalars["timestamptz"]>;
  leftAt?: InputMaybe<Scalars["timestamptz"]>;
  role?: InputMaybe<Rooms_Roles_Enum>;
  roomId?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "rooms_members" */
export enum Rooms_Members_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  JoinedAt = "joinedAt",
  /** column name */
  LeftAt = "leftAt",
  /** column name */
  Role = "role",
  /** column name */
  RoomId = "roomId",
  /** column name */
  UserId = "userId",
}

/** columns and relationships of "rooms_messages" */
export type Rooms_Messages = {
  __typename?: "rooms_messages";
  createdAt: Scalars["timestamptz"];
  id: Scalars["uuid"];
  read: Scalars["Boolean"];
  /** An object relationship */
  room: Rooms;
  roomId: Scalars["uuid"];
  senderId: Scalars["uuid"];
  text: Scalars["String"];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "rooms_messages" */
export type Rooms_Messages_Aggregate = {
  __typename?: "rooms_messages_aggregate";
  aggregate?: Maybe<Rooms_Messages_Aggregate_Fields>;
  nodes: Array<Rooms_Messages>;
};

/** aggregate fields of "rooms_messages" */
export type Rooms_Messages_Aggregate_Fields = {
  __typename?: "rooms_messages_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Rooms_Messages_Max_Fields>;
  min?: Maybe<Rooms_Messages_Min_Fields>;
};

/** aggregate fields of "rooms_messages" */
export type Rooms_Messages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "rooms_messages" */
export type Rooms_Messages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rooms_Messages_Max_Order_By>;
  min?: InputMaybe<Rooms_Messages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "rooms_messages" */
export type Rooms_Messages_Arr_Rel_Insert_Input = {
  data: Array<Rooms_Messages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_Messages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rooms_messages". All fields are combined with a logical 'AND'. */
export type Rooms_Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Messages_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Messages_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Messages_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  read?: InputMaybe<Boolean_Comparison_Exp>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  roomId?: InputMaybe<Uuid_Comparison_Exp>;
  senderId?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "rooms_messages" */
export enum Rooms_Messages_Constraint {
  /** unique or primary key constraint */
  RoomsMessagesPkey = "rooms_messages_pkey",
}

/** input type for inserting data into table "rooms_messages" */
export type Rooms_Messages_Insert_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  read?: InputMaybe<Scalars["Boolean"]>;
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  roomId?: InputMaybe<Scalars["uuid"]>;
  senderId?: InputMaybe<Scalars["uuid"]>;
  text?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rooms_Messages_Max_Fields = {
  __typename?: "rooms_messages_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  roomId?: Maybe<Scalars["uuid"]>;
  senderId?: Maybe<Scalars["uuid"]>;
  text?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "rooms_messages" */
export type Rooms_Messages_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rooms_Messages_Min_Fields = {
  __typename?: "rooms_messages_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  roomId?: Maybe<Scalars["uuid"]>;
  senderId?: Maybe<Scalars["uuid"]>;
  text?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "rooms_messages" */
export type Rooms_Messages_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  roomId?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rooms_messages" */
export type Rooms_Messages_Mutation_Response = {
  __typename?: "rooms_messages_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms_Messages>;
};

/** on_conflict condition type for table "rooms_messages" */
export type Rooms_Messages_On_Conflict = {
  constraint: Rooms_Messages_Constraint;
  update_columns?: Array<Rooms_Messages_Update_Column>;
  where?: InputMaybe<Rooms_Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms_messages". */
export type Rooms_Messages_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  read?: InputMaybe<Order_By>;
  room?: InputMaybe<Rooms_Order_By>;
  roomId?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: rooms_messages */
export type Rooms_Messages_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "rooms_messages" */
export enum Rooms_Messages_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  Read = "read",
  /** column name */
  RoomId = "roomId",
  /** column name */
  SenderId = "senderId",
  /** column name */
  Text = "text",
}

/** input type for updating data in table "rooms_messages" */
export type Rooms_Messages_Set_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  read?: InputMaybe<Scalars["Boolean"]>;
  roomId?: InputMaybe<Scalars["uuid"]>;
  senderId?: InputMaybe<Scalars["uuid"]>;
  text?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "rooms_messages" */
export enum Rooms_Messages_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  Read = "read",
  /** column name */
  RoomId = "roomId",
  /** column name */
  SenderId = "senderId",
  /** column name */
  Text = "text",
}

/** aggregate min on columns */
export type Rooms_Min_Fields = {
  __typename?: "rooms_min_fields";
  capacity?: Maybe<Scalars["Int"]>;
  categories?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  hostId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "rooms" */
export type Rooms_Min_Order_By = {
  capacity?: InputMaybe<Order_By>;
  categories?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  hostId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rooms" */
export type Rooms_Mutation_Response = {
  __typename?: "rooms_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms>;
};

/** input type for inserting object relation for remote table "rooms" */
export type Rooms_Obj_Rel_Insert_Input = {
  data: Rooms_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};

/** on_conflict condition type for table "rooms" */
export type Rooms_On_Conflict = {
  constraint: Rooms_Constraint;
  update_columns?: Array<Rooms_Update_Column>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms". */
export type Rooms_Order_By = {
  active?: InputMaybe<Order_By>;
  capacity?: InputMaybe<Order_By>;
  categories?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  games_aggregate?: InputMaybe<Games_Aggregate_Order_By>;
  games_rounds_aggregate?: InputMaybe<Games_Rounds_Aggregate_Order_By>;
  host?: InputMaybe<Users_Order_By>;
  hostId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy?: InputMaybe<Order_By>;
  rooms_games_aggregate?: InputMaybe<Rooms_Games_Aggregate_Order_By>;
  rooms_members_aggregate?: InputMaybe<Rooms_Members_Aggregate_Order_By>;
  rooms_messages_aggregate?: InputMaybe<Rooms_Messages_Aggregate_Order_By>;
  rooms_privacy?: InputMaybe<Rooms_Privacy_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  word_categories_aggregate?: InputMaybe<Rooms_Word_Categories_Aggregate_Order_By>;
};

/** primary key columns input for table: rooms */
export type Rooms_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** columns and relationships of "rooms_privacy" */
export type Rooms_Privacy = {
  __typename?: "rooms_privacy";
  /** An array relationship */
  rooms: Array<Rooms>;
  /** An aggregate relationship */
  rooms_aggregate: Rooms_Aggregate;
  type: Scalars["String"];
};

/** columns and relationships of "rooms_privacy" */
export type Rooms_PrivacyRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

/** columns and relationships of "rooms_privacy" */
export type Rooms_PrivacyRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

/** aggregated selection of "rooms_privacy" */
export type Rooms_Privacy_Aggregate = {
  __typename?: "rooms_privacy_aggregate";
  aggregate?: Maybe<Rooms_Privacy_Aggregate_Fields>;
  nodes: Array<Rooms_Privacy>;
};

/** aggregate fields of "rooms_privacy" */
export type Rooms_Privacy_Aggregate_Fields = {
  __typename?: "rooms_privacy_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Rooms_Privacy_Max_Fields>;
  min?: Maybe<Rooms_Privacy_Min_Fields>;
};

/** aggregate fields of "rooms_privacy" */
export type Rooms_Privacy_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Privacy_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "rooms_privacy". All fields are combined with a logical 'AND'. */
export type Rooms_Privacy_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Privacy_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Privacy_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Privacy_Bool_Exp>>;
  rooms?: InputMaybe<Rooms_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rooms_privacy" */
export enum Rooms_Privacy_Constraint {
  /** unique or primary key constraint */
  RoomPrivacyPkey = "room_privacy_pkey",
}

export enum Rooms_Privacy_Enum {
  Private = "private",
  Public = "public",
}

/** Boolean expression to compare columns of type "rooms_privacy_enum". All fields are combined with logical 'AND'. */
export type Rooms_Privacy_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Rooms_Privacy_Enum>;
  _in?: InputMaybe<Array<Rooms_Privacy_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Rooms_Privacy_Enum>;
  _nin?: InputMaybe<Array<Rooms_Privacy_Enum>>;
};

/** input type for inserting data into table "rooms_privacy" */
export type Rooms_Privacy_Insert_Input = {
  rooms?: InputMaybe<Rooms_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Rooms_Privacy_Max_Fields = {
  __typename?: "rooms_privacy_max_fields";
  type?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Rooms_Privacy_Min_Fields = {
  __typename?: "rooms_privacy_min_fields";
  type?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "rooms_privacy" */
export type Rooms_Privacy_Mutation_Response = {
  __typename?: "rooms_privacy_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms_Privacy>;
};

/** input type for inserting object relation for remote table "rooms_privacy" */
export type Rooms_Privacy_Obj_Rel_Insert_Input = {
  data: Rooms_Privacy_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_Privacy_On_Conflict>;
};

/** on_conflict condition type for table "rooms_privacy" */
export type Rooms_Privacy_On_Conflict = {
  constraint: Rooms_Privacy_Constraint;
  update_columns?: Array<Rooms_Privacy_Update_Column>;
  where?: InputMaybe<Rooms_Privacy_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms_privacy". */
export type Rooms_Privacy_Order_By = {
  rooms_aggregate?: InputMaybe<Rooms_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rooms_privacy */
export type Rooms_Privacy_Pk_Columns_Input = {
  type: Scalars["String"];
};

/** select columns of table "rooms_privacy" */
export enum Rooms_Privacy_Select_Column {
  /** column name */
  Type = "type",
}

/** input type for updating data in table "rooms_privacy" */
export type Rooms_Privacy_Set_Input = {
  type?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "rooms_privacy" */
export enum Rooms_Privacy_Update_Column {
  /** column name */
  Type = "type",
}

/** columns and relationships of "rooms_roles" */
export type Rooms_Roles = {
  __typename?: "rooms_roles";
  role: Scalars["String"];
  /** An array relationship */
  rooms_members: Array<Rooms_Members>;
  /** An aggregate relationship */
  rooms_members_aggregate: Rooms_Members_Aggregate;
};

/** columns and relationships of "rooms_roles" */
export type Rooms_RolesRooms_MembersArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Members_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Members_Order_By>>;
  where?: InputMaybe<Rooms_Members_Bool_Exp>;
};

/** columns and relationships of "rooms_roles" */
export type Rooms_RolesRooms_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Members_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Members_Order_By>>;
  where?: InputMaybe<Rooms_Members_Bool_Exp>;
};

/** aggregated selection of "rooms_roles" */
export type Rooms_Roles_Aggregate = {
  __typename?: "rooms_roles_aggregate";
  aggregate?: Maybe<Rooms_Roles_Aggregate_Fields>;
  nodes: Array<Rooms_Roles>;
};

/** aggregate fields of "rooms_roles" */
export type Rooms_Roles_Aggregate_Fields = {
  __typename?: "rooms_roles_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Rooms_Roles_Max_Fields>;
  min?: Maybe<Rooms_Roles_Min_Fields>;
};

/** aggregate fields of "rooms_roles" */
export type Rooms_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "rooms_roles". All fields are combined with a logical 'AND'. */
export type Rooms_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Roles_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Roles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  rooms_members?: InputMaybe<Rooms_Members_Bool_Exp>;
};

/** unique or primary key constraints on table "rooms_roles" */
export enum Rooms_Roles_Constraint {
  /** unique or primary key constraint */
  RoomsRolesPkey = "rooms_roles_pkey",
}

export enum Rooms_Roles_Enum {
  Host = "host",
  Player = "player",
}

/** Boolean expression to compare columns of type "rooms_roles_enum". All fields are combined with logical 'AND'. */
export type Rooms_Roles_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Rooms_Roles_Enum>;
  _in?: InputMaybe<Array<Rooms_Roles_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Rooms_Roles_Enum>;
  _nin?: InputMaybe<Array<Rooms_Roles_Enum>>;
};

/** input type for inserting data into table "rooms_roles" */
export type Rooms_Roles_Insert_Input = {
  role?: InputMaybe<Scalars["String"]>;
  rooms_members?: InputMaybe<Rooms_Members_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rooms_Roles_Max_Fields = {
  __typename?: "rooms_roles_max_fields";
  role?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Rooms_Roles_Min_Fields = {
  __typename?: "rooms_roles_min_fields";
  role?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "rooms_roles" */
export type Rooms_Roles_Mutation_Response = {
  __typename?: "rooms_roles_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms_Roles>;
};

/** input type for inserting object relation for remote table "rooms_roles" */
export type Rooms_Roles_Obj_Rel_Insert_Input = {
  data: Rooms_Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_Roles_On_Conflict>;
};

/** on_conflict condition type for table "rooms_roles" */
export type Rooms_Roles_On_Conflict = {
  constraint: Rooms_Roles_Constraint;
  update_columns?: Array<Rooms_Roles_Update_Column>;
  where?: InputMaybe<Rooms_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms_roles". */
export type Rooms_Roles_Order_By = {
  role?: InputMaybe<Order_By>;
  rooms_members_aggregate?: InputMaybe<Rooms_Members_Aggregate_Order_By>;
};

/** primary key columns input for table: rooms_roles */
export type Rooms_Roles_Pk_Columns_Input = {
  role: Scalars["String"];
};

/** select columns of table "rooms_roles" */
export enum Rooms_Roles_Select_Column {
  /** column name */
  Role = "role",
}

/** input type for updating data in table "rooms_roles" */
export type Rooms_Roles_Set_Input = {
  role?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "rooms_roles" */
export enum Rooms_Roles_Update_Column {
  /** column name */
  Role = "role",
}

/** select columns of table "rooms" */
export enum Rooms_Select_Column {
  /** column name */
  Active = "active",
  /** column name */
  Capacity = "capacity",
  /** column name */
  Categories = "categories",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  HostId = "hostId",
  /** column name */
  Id = "id",
  /** column name */
  Privacy = "privacy",
  /** column name */
  UpdatedAt = "updatedAt",
}

/** input type for updating data in table "rooms" */
export type Rooms_Set_Input = {
  active?: InputMaybe<Scalars["Boolean"]>;
  capacity?: InputMaybe<Scalars["Int"]>;
  categories?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  hostId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  privacy?: InputMaybe<Rooms_Privacy_Enum>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Rooms_Stddev_Fields = {
  __typename?: "rooms_stddev_fields";
  capacity?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "rooms" */
export type Rooms_Stddev_Order_By = {
  capacity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rooms_Stddev_Pop_Fields = {
  __typename?: "rooms_stddev_pop_fields";
  capacity?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "rooms" */
export type Rooms_Stddev_Pop_Order_By = {
  capacity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rooms_Stddev_Samp_Fields = {
  __typename?: "rooms_stddev_samp_fields";
  capacity?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "rooms" */
export type Rooms_Stddev_Samp_Order_By = {
  capacity?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Rooms_Sum_Fields = {
  __typename?: "rooms_sum_fields";
  capacity?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "rooms" */
export type Rooms_Sum_Order_By = {
  capacity?: InputMaybe<Order_By>;
};

/** update columns of table "rooms" */
export enum Rooms_Update_Column {
  /** column name */
  Active = "active",
  /** column name */
  Capacity = "capacity",
  /** column name */
  Categories = "categories",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  HostId = "hostId",
  /** column name */
  Id = "id",
  /** column name */
  Privacy = "privacy",
  /** column name */
  UpdatedAt = "updatedAt",
}

/** aggregate var_pop on columns */
export type Rooms_Var_Pop_Fields = {
  __typename?: "rooms_var_pop_fields";
  capacity?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "rooms" */
export type Rooms_Var_Pop_Order_By = {
  capacity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rooms_Var_Samp_Fields = {
  __typename?: "rooms_var_samp_fields";
  capacity?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "rooms" */
export type Rooms_Var_Samp_Order_By = {
  capacity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rooms_Variance_Fields = {
  __typename?: "rooms_variance_fields";
  capacity?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "rooms" */
export type Rooms_Variance_Order_By = {
  capacity?: InputMaybe<Order_By>;
};

/** columns and relationships of "rooms_word_categories" */
export type Rooms_Word_Categories = {
  __typename?: "rooms_word_categories";
  /** An array relationship */
  animals: Array<Animals>;
  /** An aggregate relationship */
  animals_aggregate: Animals_Aggregate;
  type: Scalars["String"];
};

/** columns and relationships of "rooms_word_categories" */
export type Rooms_Word_CategoriesAnimalsArgs = {
  distinct_on?: InputMaybe<Array<Animals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Animals_Order_By>>;
  where?: InputMaybe<Animals_Bool_Exp>;
};

/** columns and relationships of "rooms_word_categories" */
export type Rooms_Word_CategoriesAnimals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Animals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Animals_Order_By>>;
  where?: InputMaybe<Animals_Bool_Exp>;
};

/** aggregated selection of "rooms_word_categories" */
export type Rooms_Word_Categories_Aggregate = {
  __typename?: "rooms_word_categories_aggregate";
  aggregate?: Maybe<Rooms_Word_Categories_Aggregate_Fields>;
  nodes: Array<Rooms_Word_Categories>;
};

/** aggregate fields of "rooms_word_categories" */
export type Rooms_Word_Categories_Aggregate_Fields = {
  __typename?: "rooms_word_categories_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Rooms_Word_Categories_Max_Fields>;
  min?: Maybe<Rooms_Word_Categories_Min_Fields>;
};

/** aggregate fields of "rooms_word_categories" */
export type Rooms_Word_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Word_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "rooms_word_categories" */
export type Rooms_Word_Categories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rooms_Word_Categories_Max_Order_By>;
  min?: InputMaybe<Rooms_Word_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "rooms_word_categories" */
export type Rooms_Word_Categories_Arr_Rel_Insert_Input = {
  data: Array<Rooms_Word_Categories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_Word_Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rooms_word_categories". All fields are combined with a logical 'AND'. */
export type Rooms_Word_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Word_Categories_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Word_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Word_Categories_Bool_Exp>>;
  animals?: InputMaybe<Animals_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rooms_word_categories" */
export enum Rooms_Word_Categories_Constraint {
  /** unique or primary key constraint */
  RoomsWordCategoriesPkey = "rooms_word_categories_pkey",
}

export enum Rooms_Word_Categories_Enum {
  Animal = "animal",
  City = "city",
  Food = "food",
  Name = "name",
}

/** Boolean expression to compare columns of type "rooms_word_categories_enum". All fields are combined with logical 'AND'. */
export type Rooms_Word_Categories_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Rooms_Word_Categories_Enum>;
  _in?: InputMaybe<Array<Rooms_Word_Categories_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Rooms_Word_Categories_Enum>;
  _nin?: InputMaybe<Array<Rooms_Word_Categories_Enum>>;
};

/** input type for inserting data into table "rooms_word_categories" */
export type Rooms_Word_Categories_Insert_Input = {
  animals?: InputMaybe<Animals_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Rooms_Word_Categories_Max_Fields = {
  __typename?: "rooms_word_categories_max_fields";
  type?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "rooms_word_categories" */
export type Rooms_Word_Categories_Max_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rooms_Word_Categories_Min_Fields = {
  __typename?: "rooms_word_categories_min_fields";
  type?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "rooms_word_categories" */
export type Rooms_Word_Categories_Min_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rooms_word_categories" */
export type Rooms_Word_Categories_Mutation_Response = {
  __typename?: "rooms_word_categories_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms_Word_Categories>;
};

/** input type for inserting object relation for remote table "rooms_word_categories" */
export type Rooms_Word_Categories_Obj_Rel_Insert_Input = {
  data: Rooms_Word_Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_Word_Categories_On_Conflict>;
};

/** on_conflict condition type for table "rooms_word_categories" */
export type Rooms_Word_Categories_On_Conflict = {
  constraint: Rooms_Word_Categories_Constraint;
  update_columns?: Array<Rooms_Word_Categories_Update_Column>;
  where?: InputMaybe<Rooms_Word_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms_word_categories". */
export type Rooms_Word_Categories_Order_By = {
  animals_aggregate?: InputMaybe<Animals_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rooms_word_categories */
export type Rooms_Word_Categories_Pk_Columns_Input = {
  type: Scalars["String"];
};

/** select columns of table "rooms_word_categories" */
export enum Rooms_Word_Categories_Select_Column {
  /** column name */
  Type = "type",
}

/** input type for updating data in table "rooms_word_categories" */
export type Rooms_Word_Categories_Set_Input = {
  type?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "rooms_word_categories" */
export enum Rooms_Word_Categories_Update_Column {
  /** column name */
  Type = "type",
}

/** columns and relationships of "rounds_answers" */
export type Rounds_Answers = {
  __typename?: "rounds_answers";
  correct: Scalars["Boolean"];
  id: Scalars["uuid"];
  /** An object relationship */
  player?: Maybe<Users>;
  playerId?: Maybe<Scalars["uuid"]>;
  /** An object relationship */
  round?: Maybe<Games_Rounds>;
  roundId: Scalars["uuid"];
  score: Scalars["Int"];
  submittedAt?: Maybe<Scalars["timestamptz"]>;
  value?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "rounds_answers" */
export type Rounds_Answers_Aggregate = {
  __typename?: "rounds_answers_aggregate";
  aggregate?: Maybe<Rounds_Answers_Aggregate_Fields>;
  nodes: Array<Rounds_Answers>;
};

/** aggregate fields of "rounds_answers" */
export type Rounds_Answers_Aggregate_Fields = {
  __typename?: "rounds_answers_aggregate_fields";
  avg?: Maybe<Rounds_Answers_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Rounds_Answers_Max_Fields>;
  min?: Maybe<Rounds_Answers_Min_Fields>;
  stddev?: Maybe<Rounds_Answers_Stddev_Fields>;
  stddev_pop?: Maybe<Rounds_Answers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rounds_Answers_Stddev_Samp_Fields>;
  sum?: Maybe<Rounds_Answers_Sum_Fields>;
  var_pop?: Maybe<Rounds_Answers_Var_Pop_Fields>;
  var_samp?: Maybe<Rounds_Answers_Var_Samp_Fields>;
  variance?: Maybe<Rounds_Answers_Variance_Fields>;
};

/** aggregate fields of "rounds_answers" */
export type Rounds_Answers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rounds_Answers_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Rounds_Answers_Avg_Fields = {
  __typename?: "rounds_answers_avg_fields";
  score?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "rounds_answers". All fields are combined with a logical 'AND'. */
export type Rounds_Answers_Bool_Exp = {
  _and?: InputMaybe<Array<Rounds_Answers_Bool_Exp>>;
  _not?: InputMaybe<Rounds_Answers_Bool_Exp>;
  _or?: InputMaybe<Array<Rounds_Answers_Bool_Exp>>;
  correct?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  player?: InputMaybe<Users_Bool_Exp>;
  playerId?: InputMaybe<Uuid_Comparison_Exp>;
  round?: InputMaybe<Games_Rounds_Bool_Exp>;
  roundId?: InputMaybe<Uuid_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  submittedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rounds_answers" */
export enum Rounds_Answers_Constraint {
  /** unique or primary key constraint */
  RoundsAnswersPkey = "rounds_answers_pkey",
}

/** input type for incrementing numeric columns in table "rounds_answers" */
export type Rounds_Answers_Inc_Input = {
  score?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "rounds_answers" */
export type Rounds_Answers_Insert_Input = {
  correct?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  player?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  playerId?: InputMaybe<Scalars["uuid"]>;
  round?: InputMaybe<Games_Rounds_Obj_Rel_Insert_Input>;
  roundId?: InputMaybe<Scalars["uuid"]>;
  score?: InputMaybe<Scalars["Int"]>;
  submittedAt?: InputMaybe<Scalars["timestamptz"]>;
  value?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Rounds_Answers_Max_Fields = {
  __typename?: "rounds_answers_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  playerId?: Maybe<Scalars["uuid"]>;
  roundId?: Maybe<Scalars["uuid"]>;
  score?: Maybe<Scalars["Int"]>;
  submittedAt?: Maybe<Scalars["timestamptz"]>;
  value?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Rounds_Answers_Min_Fields = {
  __typename?: "rounds_answers_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  playerId?: Maybe<Scalars["uuid"]>;
  roundId?: Maybe<Scalars["uuid"]>;
  score?: Maybe<Scalars["Int"]>;
  submittedAt?: Maybe<Scalars["timestamptz"]>;
  value?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "rounds_answers" */
export type Rounds_Answers_Mutation_Response = {
  __typename?: "rounds_answers_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Rounds_Answers>;
};

/** on_conflict condition type for table "rounds_answers" */
export type Rounds_Answers_On_Conflict = {
  constraint: Rounds_Answers_Constraint;
  update_columns?: Array<Rounds_Answers_Update_Column>;
  where?: InputMaybe<Rounds_Answers_Bool_Exp>;
};

/** Ordering options when selecting data from "rounds_answers". */
export type Rounds_Answers_Order_By = {
  correct?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player?: InputMaybe<Users_Order_By>;
  playerId?: InputMaybe<Order_By>;
  round?: InputMaybe<Games_Rounds_Order_By>;
  roundId?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  submittedAt?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rounds_answers */
export type Rounds_Answers_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "rounds_answers" */
export enum Rounds_Answers_Select_Column {
  /** column name */
  Correct = "correct",
  /** column name */
  Id = "id",
  /** column name */
  PlayerId = "playerId",
  /** column name */
  RoundId = "roundId",
  /** column name */
  Score = "score",
  /** column name */
  SubmittedAt = "submittedAt",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "rounds_answers" */
export type Rounds_Answers_Set_Input = {
  correct?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  playerId?: InputMaybe<Scalars["uuid"]>;
  roundId?: InputMaybe<Scalars["uuid"]>;
  score?: InputMaybe<Scalars["Int"]>;
  submittedAt?: InputMaybe<Scalars["timestamptz"]>;
  value?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Rounds_Answers_Stddev_Fields = {
  __typename?: "rounds_answers_stddev_fields";
  score?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Rounds_Answers_Stddev_Pop_Fields = {
  __typename?: "rounds_answers_stddev_pop_fields";
  score?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Rounds_Answers_Stddev_Samp_Fields = {
  __typename?: "rounds_answers_stddev_samp_fields";
  score?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Rounds_Answers_Sum_Fields = {
  __typename?: "rounds_answers_sum_fields";
  score?: Maybe<Scalars["Int"]>;
};

/** update columns of table "rounds_answers" */
export enum Rounds_Answers_Update_Column {
  /** column name */
  Correct = "correct",
  /** column name */
  Id = "id",
  /** column name */
  PlayerId = "playerId",
  /** column name */
  RoundId = "roundId",
  /** column name */
  Score = "score",
  /** column name */
  SubmittedAt = "submittedAt",
  /** column name */
  Value = "value",
}

/** aggregate var_pop on columns */
export type Rounds_Answers_Var_Pop_Fields = {
  __typename?: "rounds_answers_var_pop_fields";
  score?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Rounds_Answers_Var_Samp_Fields = {
  __typename?: "rounds_answers_var_samp_fields";
  score?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Rounds_Answers_Variance_Fields = {
  __typename?: "rounds_answers_variance_fields";
  score?: Maybe<Scalars["Float"]>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** An array relationship */
  animals: Array<Animals>;
  /** An aggregate relationship */
  animals_aggregate: Animals_Aggregate;
  /** fetch data from the table: "animals" using primary key columns */
  animals_by_pk?: Maybe<Animals>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** An array relationship */
  games_rounds: Array<Games_Rounds>;
  /** An aggregate relationship */
  games_rounds_aggregate: Games_Rounds_Aggregate;
  /** fetch data from the table: "games_rounds" using primary key columns */
  games_rounds_by_pk?: Maybe<Games_Rounds>;
  /** An array relationship */
  rooms: Array<Rooms>;
  /** An aggregate relationship */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** An array relationship */
  rooms_games: Array<Rooms_Games>;
  /** An aggregate relationship */
  rooms_games_aggregate: Rooms_Games_Aggregate;
  /** fetch data from the table: "rooms_games" using primary key columns */
  rooms_games_by_pk?: Maybe<Rooms_Games>;
  /** An array relationship */
  rooms_members: Array<Rooms_Members>;
  /** An aggregate relationship */
  rooms_members_aggregate: Rooms_Members_Aggregate;
  /** fetch data from the table: "rooms_members" using primary key columns */
  rooms_members_by_pk?: Maybe<Rooms_Members>;
  /** An array relationship */
  rooms_messages: Array<Rooms_Messages>;
  /** An aggregate relationship */
  rooms_messages_aggregate: Rooms_Messages_Aggregate;
  /** fetch data from the table: "rooms_messages" using primary key columns */
  rooms_messages_by_pk?: Maybe<Rooms_Messages>;
  /** fetch data from the table: "rooms_privacy" */
  rooms_privacy: Array<Rooms_Privacy>;
  /** fetch aggregated fields from the table: "rooms_privacy" */
  rooms_privacy_aggregate: Rooms_Privacy_Aggregate;
  /** fetch data from the table: "rooms_privacy" using primary key columns */
  rooms_privacy_by_pk?: Maybe<Rooms_Privacy>;
  /** fetch data from the table: "rooms_roles" */
  rooms_roles: Array<Rooms_Roles>;
  /** fetch aggregated fields from the table: "rooms_roles" */
  rooms_roles_aggregate: Rooms_Roles_Aggregate;
  /** fetch data from the table: "rooms_roles" using primary key columns */
  rooms_roles_by_pk?: Maybe<Rooms_Roles>;
  /** fetch data from the table: "rooms_word_categories" */
  rooms_word_categories: Array<Rooms_Word_Categories>;
  /** fetch aggregated fields from the table: "rooms_word_categories" */
  rooms_word_categories_aggregate: Rooms_Word_Categories_Aggregate;
  /** fetch data from the table: "rooms_word_categories" using primary key columns */
  rooms_word_categories_by_pk?: Maybe<Rooms_Word_Categories>;
  /** fetch data from the table: "rounds_answers" */
  rounds_answers: Array<Rounds_Answers>;
  /** fetch aggregated fields from the table: "rounds_answers" */
  rounds_answers_aggregate: Rounds_Answers_Aggregate;
  /** fetch data from the table: "rounds_answers" using primary key columns */
  rounds_answers_by_pk?: Maybe<Rounds_Answers>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Subscription_RootAnimalsArgs = {
  distinct_on?: InputMaybe<Array<Animals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Animals_Order_By>>;
  where?: InputMaybe<Animals_Bool_Exp>;
};

export type Subscription_RootAnimals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Animals_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Animals_Order_By>>;
  where?: InputMaybe<Animals_Bool_Exp>;
};

export type Subscription_RootAnimals_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};

export type Subscription_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};

export type Subscription_RootGames_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootGames_RoundsArgs = {
  distinct_on?: InputMaybe<Array<Games_Rounds_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Rounds_Order_By>>;
  where?: InputMaybe<Games_Rounds_Bool_Exp>;
};

export type Subscription_RootGames_Rounds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Rounds_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Rounds_Order_By>>;
  where?: InputMaybe<Games_Rounds_Bool_Exp>;
};

export type Subscription_RootGames_Rounds_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

export type Subscription_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

export type Subscription_RootRooms_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootRooms_GamesArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Games_Order_By>>;
  where?: InputMaybe<Rooms_Games_Bool_Exp>;
};

export type Subscription_RootRooms_Games_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Games_Order_By>>;
  where?: InputMaybe<Rooms_Games_Bool_Exp>;
};

export type Subscription_RootRooms_Games_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootRooms_MembersArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Members_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Members_Order_By>>;
  where?: InputMaybe<Rooms_Members_Bool_Exp>;
};

export type Subscription_RootRooms_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Members_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Members_Order_By>>;
  where?: InputMaybe<Rooms_Members_Bool_Exp>;
};

export type Subscription_RootRooms_Members_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootRooms_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Messages_Order_By>>;
  where?: InputMaybe<Rooms_Messages_Bool_Exp>;
};

export type Subscription_RootRooms_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Messages_Order_By>>;
  where?: InputMaybe<Rooms_Messages_Bool_Exp>;
};

export type Subscription_RootRooms_Messages_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootRooms_PrivacyArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Privacy_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Privacy_Order_By>>;
  where?: InputMaybe<Rooms_Privacy_Bool_Exp>;
};

export type Subscription_RootRooms_Privacy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Privacy_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Privacy_Order_By>>;
  where?: InputMaybe<Rooms_Privacy_Bool_Exp>;
};

export type Subscription_RootRooms_Privacy_By_PkArgs = {
  type: Scalars["String"];
};

export type Subscription_RootRooms_RolesArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Roles_Order_By>>;
  where?: InputMaybe<Rooms_Roles_Bool_Exp>;
};

export type Subscription_RootRooms_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Roles_Order_By>>;
  where?: InputMaybe<Rooms_Roles_Bool_Exp>;
};

export type Subscription_RootRooms_Roles_By_PkArgs = {
  role: Scalars["String"];
};

export type Subscription_RootRooms_Word_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Word_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Word_Categories_Order_By>>;
  where?: InputMaybe<Rooms_Word_Categories_Bool_Exp>;
};

export type Subscription_RootRooms_Word_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Word_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Word_Categories_Order_By>>;
  where?: InputMaybe<Rooms_Word_Categories_Bool_Exp>;
};

export type Subscription_RootRooms_Word_Categories_By_PkArgs = {
  type: Scalars["String"];
};

export type Subscription_RootRounds_AnswersArgs = {
  distinct_on?: InputMaybe<Array<Rounds_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rounds_Answers_Order_By>>;
  where?: InputMaybe<Rounds_Answers_Bool_Exp>;
};

export type Subscription_RootRounds_Answers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rounds_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rounds_Answers_Order_By>>;
  where?: InputMaybe<Rounds_Answers_Bool_Exp>;
};

export type Subscription_RootRounds_Answers_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  createdAt: Scalars["timestamptz"];
  email: Scalars["String"];
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** An array relationship */
  games_rounds: Array<Games_Rounds>;
  /** An aggregate relationship */
  games_rounds_aggregate: Games_Rounds_Aggregate;
  id: Scalars["uuid"];
  lastSeen?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  rooms: Array<Rooms>;
  /** An aggregate relationship */
  rooms_aggregate: Rooms_Aggregate;
  /** An array relationship */
  rooms_members: Array<Rooms_Members>;
  /** An aggregate relationship */
  rooms_members_aggregate: Rooms_Members_Aggregate;
  /** An array relationship */
  rooms_messages: Array<Rooms_Messages>;
  /** An aggregate relationship */
  rooms_messages_aggregate: Rooms_Messages_Aggregate;
  updatedAt: Scalars["timestamptz"];
  username?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "users" */
export type UsersGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersGames_RoundsArgs = {
  distinct_on?: InputMaybe<Array<Games_Rounds_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Rounds_Order_By>>;
  where?: InputMaybe<Games_Rounds_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersGames_Rounds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Rounds_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Games_Rounds_Order_By>>;
  where?: InputMaybe<Games_Rounds_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersRooms_MembersArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Members_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Members_Order_By>>;
  where?: InputMaybe<Rooms_Members_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersRooms_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Members_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Members_Order_By>>;
  where?: InputMaybe<Rooms_Members_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersRooms_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Messages_Order_By>>;
  where?: InputMaybe<Rooms_Messages_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersRooms_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Rooms_Messages_Order_By>>;
  where?: InputMaybe<Rooms_Messages_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  games?: InputMaybe<Games_Bool_Exp>;
  games_rounds?: InputMaybe<Games_Rounds_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  rooms?: InputMaybe<Rooms_Bool_Exp>;
  rooms_members?: InputMaybe<Rooms_Members_Bool_Exp>;
  rooms_messages?: InputMaybe<Rooms_Messages_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = "users_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  email?: InputMaybe<Scalars["String"]>;
  games?: InputMaybe<Games_Arr_Rel_Insert_Input>;
  games_rounds?: InputMaybe<Games_Rounds_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars["uuid"]>;
  lastSeen?: InputMaybe<Scalars["timestamptz"]>;
  rooms?: InputMaybe<Rooms_Arr_Rel_Insert_Input>;
  rooms_members?: InputMaybe<Rooms_Members_Arr_Rel_Insert_Input>;
  rooms_messages?: InputMaybe<Rooms_Messages_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  username?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastSeen?: Maybe<Scalars["timestamptz"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastSeen?: Maybe<Scalars["timestamptz"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  games_aggregate?: InputMaybe<Games_Aggregate_Order_By>;
  games_rounds_aggregate?: InputMaybe<Games_Rounds_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  rooms_aggregate?: InputMaybe<Rooms_Aggregate_Order_By>;
  rooms_members_aggregate?: InputMaybe<Rooms_Members_Aggregate_Order_By>;
  rooms_messages_aggregate?: InputMaybe<Rooms_Messages_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  LastSeen = "lastSeen",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  Username = "username",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  lastSeen?: InputMaybe<Scalars["timestamptz"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  username?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  LastSeen = "lastSeen",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  Username = "username",
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
};
