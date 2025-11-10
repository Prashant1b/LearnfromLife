import Contact from "../model/Contact.model.js";

export const createdata = async (req, res) => {
    try {
        const newdata = new Contact(req.body);
        const saveddata = await newdata.save();
        res.status(201).json(saveddata);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};