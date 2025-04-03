const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongo_username: "manuelmanu008",
        mongo_password: "6W1jYv7l8tAVFx7r",
        mongo_cluster: "cluster0",
        mongo_db: "my-blog",
      },
    };
  }
  return {
    env: {
      mongo_username: "manuelmanu008",
      mongo_password: "6W1jYv7l8tAVFx7r",
      mongo_cluster: "cluster0",
      mongo_db: "my-blog-live",
    },
  };
};
