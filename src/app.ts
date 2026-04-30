import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running 🚀"
  });
});


app.use("/api", contactRoutes);

export default app;