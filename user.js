const express = require("express");
const authRouter = require("./app/modules/user/auth/routes");

const port = 3000;
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Mount the auth router
app.use("/auth", authRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
