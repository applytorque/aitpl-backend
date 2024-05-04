const KYC = require('../models/kycSchema');

exports.postKYCData = async (req, res) => {
    try {
        const { upload_front_cover, id_document, signature_photos } = req.body;


        const newKYC = new KYC({
            upload_front_cover,
            id_document,
            signature_photos
        });

        await newKYC.save();

        return res.status(201).json({status: true, code: 201, message: "KYC data saved successfully", data:[newKYC] });
    } catch (error) {
        console.error("Error saving KYC data:", error);
        return res.status(500).json({status: false, code: 500, error: "Failed to save KYC data" });
    }
};
