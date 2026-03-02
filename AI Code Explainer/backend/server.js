import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

// LangChain + HuggingFace
import { HuggingFaceInference } from "@langchain/community/llms/hf";

const app = express();

// Security middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// HuggingFace API Key
const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;

// LangChain HuggingFace Model
const model = new HuggingFaceInference({
  apiKey: HF_API_KEY,
  model: "mistralai/Mistral-7B-Instruct-v0.2", // You can change model
  temperature: 0.3,
  maxTokens: 800,
});

// Code explanation endpoint
app.post("/api/explain-code", async (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const prompt = `
Please explain this ${language || ""} code in simple terms:

\`\`\`${language || ""}
${code}
\`\`\`
`;

    const explanation = await model.invoke(prompt);

    if (!explanation) {
      return res.status(500).json({ error: "Failed to explain code" });
    }

    res.json({ explanation, language: language || "unknown" });
  } catch (err) {
    console.error("Code Explain API Error:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    hasApiKey: !!HF_API_KEY,
    uptime: process.uptime(),
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Enhanced API server listening on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`HuggingFace API Key configured: ${!!HF_API_KEY}`);
});