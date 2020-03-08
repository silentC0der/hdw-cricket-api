import Cricket from '../models/cricket';
const getMatchById = async (matchId) => {
    const matchDetails = await Cricket.find({ match_Id: matchId });
    if(!matchDetails) {
        return 'Match does not exist';
    }
    return matchDetails;
};

const getMatchesByDate = async (fromDate, toDate) => {
    const fDate = new Date(fromDate);
    const tDate = new Date(toDate);
    console.log('fromDate--------', fDate, 'toDate------------', tDate);
    const matchList = await Cricket.find({
        matchdate_gmt: {
            $gte: fDate,
            $lt: tDate
        }
    })
    if(!matchList) {
        return 'Match does not exist';
    }
    console.log('matchList------------', matchList);
    return matchList;
};

const updateMatch = async (args) => {
    const listing = await Cricket.findOneAndUpdate(
      { match_Id: args.match_Id }, 
      args,
      {
        new: true,
        runValidators: true,
      },
    );
    return listing;
};

export {
    getMatchById,
    getMatchesByDate,
    updateMatch
}
