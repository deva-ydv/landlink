import { Request, Response } from "express";
import Contact from "../models/contact.model";

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, mobile, email, message } = req.body;

    if (!name || !mobile || !email) {
      return res.status(400).json({
        success: false,
        message: "All required fields missing"
      });
    }

    const newContact = await Contact.create({
      name,
      mobile,
      email,
      message
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newContact
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error
    });
  }
};