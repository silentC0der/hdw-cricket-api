import mongoose from 'mongoose';

const cricketSchema = new mongoose.Schema({
    match_Id: {
        type: String,
        required: 'You must supply matchId!',
    },
    comp_type: {
        type: String,
        required: 'You must supply comp_type!',
    },
    teama_Id: {
        type: String,
        required: 'You must supply teamA Id!',
    },
    teama: {
        type: String,
        required: 'You must supply teamA name!',
    },
    teama_short: {
        type: String
    },
    teama_runs: {
        type: String
    },
    teama_wickets: {
        type: String
    },
    teama_overs: {
        type: String
    },
    teamb_Id: {
        type: String,
        required: 'You must supply teamB Id!',
    },
    teamb: {
        type: String,
        required: 'You must supply teamB name!',
    },
    teamb_short: {
        type: String
    },
    teamb_runs: {
        type: String,
    },
    teamb_wickets: {
        type: String,
    },
    teamb_overs: {
        type: String,
    },
    matchdate_gmt: {
        type: String,
    },
    matchdate_ist: {
        type: String,
    },
    end_matchdate_gmt: {
        type: String,
    },
    end_matchdate_ist: {
        type: String,
    },
});

export default mongoose.model('Cricket', cricketSchema);