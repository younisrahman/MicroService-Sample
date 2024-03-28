const express = require("express");
const cors = require("cors");

const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const proxy = require("express-http-proxy");
const PORT = 8000;

const app = express();

// Logging
app.use(morgan("dev"));

// Enable cors
app.use(cors());

app.use("/customer", proxy("http://localhost:8001"));
app.use("/products", proxy("http://localhost:8002"));
app.use("/shopping", proxy("http://localhost:8003"));

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
