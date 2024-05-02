const poolSchema = require("../models/Pool")

const poolController={};


poolController.createPoolFun = async (req, res) => {
    try {
        const { propertyType,propertyURL, propertyTitle, location, propertyImages, keyHighlights, propertyDocuments, poolSize, estimatedMPY, estimatedReturn, estimatedMaturity, softCap, maxInvest, poolOpen, actualMPY, actualReturn, actualMaturity  } =
            req.body;
        const createPool = await poolSchema.create({
            propertyType, propertyTitle, propertyURL, location, propertyImages, keyHighlights, propertyDocuments, poolSize, estimatedMPY, estimatedReturn, estimatedMaturity, softCap, maxInvest, poolOpen, actualMPY, actualReturn, actualMaturity 
        });
        res
            .status(200)
            .json({ message: "createPool added successfully", createPool });
    } catch (error) {
        console.error("Error in createPool:", error);
        res.status(500).json({ message: error.message });
    }
};

poolController.getAllPool = async (req, res) => {
    try {
        const allPool = await poolSchema.find().lean();
        res.status(200).json({ message: "done", allPool });
    } catch (error) {
        console.error("Error in getAllPool:", error);
        res.status(500).json({ message: error.message });
    }
};


poolController.getPoolByName = async (req, res) => {
    try {
        const { propertyTitle } =
            req.body;
        const Pool = await poolSchema.find({ propertyTitle: propertyTitle }).lean();  
        res
            .status(200)
            .json({message:"done",Pool});
    } catch (error) {
        console.error("Error in createPool:", error);
        res.status(500).json({ message: error.message });
    }
};

poolController.getPoolById = async (req, res) => {
    try {
        const { _id } =
            req.body;
        const Pool = await poolSchema.find({ _id: _id }).lean();
        res
            .status(200)
            .json({ message: "done", Pool });
    } catch (error) {
        console.error("Error in createPool:", error);
        res.status(500).json({ message: error.message });
    }
};

module.exports=poolController;