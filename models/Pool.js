const mongoose = require("mongoose");

const poolSchema = new mongoose.Schema({
    propertyType: {
        type: String,
        // required: true,
    },

    propertyTitle: {
        type: String,
        // required: true,
    },

    propertyURL: {
        type: String,
    },

    location: {
        type: String,
        // required: true
    },


    keyHighlights: {
        type: String,
        // required: true,
    },
    propertyDocuments: {
        type: [String],
        // required: true,
    },
    propertyImages: {
        type: [String],
        // required: true,
    },

    poolSize: {
        type: Number,
        // required: true,
    },

    estimatedMPY: {
        type: Number,
        // required: true,
    },
    estimatedReturn: {
        type: Number,
        // required: true,
    },
    estimatedMaturity: {
        type: Number,
        // required: true,
    },
    softCap: {
        type: Number,
        // required: true,
    },
    // minInvest: {
    //     type: Number,
    //     // required: true,
    // },
    maxInvest: {
        type: Number,
        // required: true,
    },
    poolOpen: {
        type: Number,
        // required: true,
    },
    actualMPY: {
        type: Number,
        // required: true,
    },
    actualReturn: {
        type: Number,
        // required: true,
    },
    actualMaturity: {
        type: Number,
        // required: true,
    },

}, { timestamps: true });

module.exports = mongoose.model("createNewPooll", poolSchema);
