import Details from "../model/Instructordetail.model.js";
export const getInstructor = async(req, res) => {
    try {
        const book = await Details.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};