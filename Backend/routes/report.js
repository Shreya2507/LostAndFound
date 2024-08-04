import express from "express";
import { Lost, Found } from "../models/report.js";

const router = express.Router();

router.post("/lost", async (req, res) => {
  const { location, itemName, category, date, description, images } = req.body;

  try {
    const newLostItem = new Lost({
      location,
      itemName,
      category,
      date,
      description,
      images,
    });

    await newLostItem.save();
    res.status(201).json({ message: "Lost item reported successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/found", async (req, res) => {
  const { location, itemName, category, date, description, images } = req.body;

  try {
    const newFoundItem = new Found({
      location,
      itemName,
      category,
      date,
      description,
      images,
    });

    await newFoundItem.save();
    res.status(201).json({ message: "Found item reported successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
