import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Fix: Always return a JSON response, even on error

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Send FROM the authenticated user (prevents Gmail blocking)
      to: process.env.EMAIL_USER,
      replyTo: email, // Allow replying to the visitor
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);

    // Always send a valid JSON response, even if error is not an object
    return res.status(500).json({ error: "Failed to send message.", details: error?.toString() || "Unknown error" });
  }
});

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
