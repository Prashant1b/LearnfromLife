import Card from "../model/Cards.js";
export const getCard = async(req, res) => {
    try {
        const book = await Card.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};