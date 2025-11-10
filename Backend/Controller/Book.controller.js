import Book from "../model/Book.model.js";

export const createdata = async (req, res) => {
    try {
        const newdata = new Book(req.body);
        const saveddata = await newdata.save();
        res.status(201).json(saveddata);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};