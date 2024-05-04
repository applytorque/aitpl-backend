const KYC = require('../models/kycSchema');

exports.postKYCData = async (req, res) => {
    try {
        // Extract data from the request body
        const { upload_front_cover, id_document, signature_photos } = req.body;

        // Create a new KYC document
        const newKYC = new KYC({
            upload_front_cover,
            id_document,
            signature_photos
        });

        // Save the KYC document to the database
        await newKYC.save();

        // Respond with success message
        return res.status(201).json({ message: "KYC data saved successfully" });
    } catch (error) {
        // If an error occurs, respond with an error message
        console.error("Error saving KYC data:", error);
        return res.status(500).json({ error: "Failed to save KYC data" });
    }
};
