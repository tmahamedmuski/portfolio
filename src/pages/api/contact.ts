import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, subject, message, recaptchaToken } = req.body;

  // Verify reCAPTCHA
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
  const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
  const recaptchaData = await recaptchaRes.json();

  if (!recaptchaData.success) {
    return res.status(400).json({ error: 'reCAPTCHA failed' });
  }

  // Send email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message: ${subject || 'No subject'}`,
      text: `From: ${name} <${email}>\n\n${message}`
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Email failed' });
  }
}