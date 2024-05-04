const Deal = require('../models/DealSchema');

exports.postDealData = async (req, res) => {
    try {
        // Extract data from the request body
        const {
            project_details,
            additional_info,
            project_socials,
            company_info
        } = req.body;

        // Create a new deal document
        const newDeal = new Deal({
            project_details: {
                project_name: project_details.project_name,
                project_logo: project_details.project_logo,
                project_description: project_details.project_description,
                investment_round: project_details.investment_round,
                amount_raised: project_details.amount_raised,
                amount_needed: project_details.amount_needed,
                min_investment_amount: project_details.min_investment_amount
            },
            additional_info: {
                project_mission: additional_info.project_mission,
                project_aim: additional_info.project_aim,
                clear_mission: additional_info.clear_mission,
                project_supporters: additional_info.project_supporters,
                behind_project: additional_info.behind_project,
                team_members: additional_info.team_members,
                track_record: additional_info.track_record,
                launched_projects: additional_info.launched_projects,
                project_value: additional_info.project_value,
                differentiators: additional_info.differentiators
            },
            project_socials: {
                pitchdeck: project_socials.pitchdeck,
                linktree: project_socials.linktree,
                discord: project_socials.discord,
                x: project_socials.x,
                youtube: project_socials.youtube,
                telegram: project_socials.telegram,
                linkedin: project_socials.linkedin,
                reddit: project_socials.reddit,
                twitch: project_socials.twitch,
                calendly: project_socials.calendly
            },
            company_info: {
                company_name: company_info.company_name,
                company_logo: company_info.company_logo
            }
        });

        await newDeal.save();

        return res.status(201).json({status: true, code: 201 , message: "Deal data saved successfully", data:[newDeal] });
    } catch (error) {
        // If an error occurs, respond with an error message
        console.error("Error saving deal data:", error);
        return res.status(500).json({status: false, code: 500, error: "Failed to save deal data", data:[] });
    }
};
