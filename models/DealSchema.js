const mongoose = require("mongoose");

const DealSchema = new mongoose.Schema({
    project_details: {
        project_name: { type: String },
        project_logo: { type: String },
        project_description: { type: String },
        investment_round: { type: Number },
        amount_raised: { type: Number },
        amount_needed: { type: Number },
        min_investment_amount: { type: Number }
    },
    additional_info: {
        project_mission: { type: String },
        project_aim: { type: String },
        clear_mission: { type: String },
        project_supporters: { type: String },
        behind_project: { type: String },
        team_members: { type: String },
        track_record: { type: String },
        launched_projects: { type: String },
        project_value: { type: String },
        differentiators: { type: String }
    },
    project_socials: {
        pitchdeck: { type: String, default: null },
        linktree: { type: String },
        discord: { type: String },
        x: { type: String },
        youtube: { type: String },
        telegram: { type: String },
        linkedin: { type: String },
        reddit: { type: String },
        twitch: { type: String },
        calendly: { type: String }
    },
    company_info: {
        company_name: { type: String },
        company_logo: { type: String }
    }
});

const Deal = mongoose.model('Deal', DealSchema);

module.exports = Deal;
