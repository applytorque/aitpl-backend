const mongoose = require("mongoose");

const KYCSchema = new mongoose.Schema({
    upload_front_cover: { type: String },
    id_document: { type: String },
    signature_photos: { type: String }
});

const KYC = mongoose.model('KYC', KYCSchema);

module.exports = KYC;
