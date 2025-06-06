const express = require("express");
const path = require("path");
const { createServer } = require("http");

const usersRouter = require("./server/routes/users.router.js");
const productsRouter = require("./server/routes/products.router.js");
const ordersRouter = require("./server/routes/orders.router.js");
const postsRouter = require("./server/routes/posts.router");
const { initSocketInstance } = require("./server/services/socket.service.js");

const PORT = 5050;

const app = express();
const httpServer = createServer(app);

// Middlewares
app.use(express.json());
app.use("/app1", express.static(path.join(__dirname, "app1")));
app.use("/app2", express.static(path.join(__dirname, "app2")));

// Routes
app.use("/", usersRouter);
app.use("/", productsRouter);
app.use("/", ordersRouter);
app.use("/", postsRouter);


// Services
initSocketInstance(httpServer);

httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
