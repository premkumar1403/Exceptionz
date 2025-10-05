const express = require("express");
const app = express();
const MongoDB = require("./config/db.config");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const contactRouter = require("./router/exceptionz");

// Enhanced CORS configuration for Vercel
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "X-Requested-With",
    ],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// Handle preflight requests
app.options("*", cors());

MongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/exceptionz", contactRouter);

// Root route for testing
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

// Export the Express app for Vercel
module.exports = app;

// Only listen on port in development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
}
