const envFile =
  process.env.NODE_ENV && process.env.NODE_ENV !== "production"
    ? `.env.${process.env.NODE_ENV}`
    : ".env";

require("dotenv").config({ path: envFile });
module.exports = {
  client: {
    service: {
      name: "hasura",
      url:
        process.env.HASURA_GRAPHQL_ENDPOINT || "https://neno.hasura.app/v1/graphql",
      headers: {
        "x-hasura-admin-secret":
          process.env.HASURA_GRAPHQL_ADMIN_SECRET ||
          "IiiRhd7dcnRtFZ4DHWwYu7uAQxUXOPUaqJF7OY6G8tCJqigg0nqUrZMKcx4vQddY",
        "x-hasura-role": "admin",
      },
    },
  },
};
