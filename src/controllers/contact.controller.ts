import { Request, Response } from "express";
import { sendEmail } from "../utils/sendEmail";

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !mobile) {
      return res.status(400).json({
        success: false,
        message: "All required fields missing"
      });
    }

    await sendEmail({ name, email, mobile, message });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully"
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email"
    });
  }
};