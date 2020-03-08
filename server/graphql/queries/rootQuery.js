import {
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
  } from 'graphql';
import { getMatchById, getMatchesByDate } from '../../controllers/cricket';
import CricketMatch from '../types/rootType';

const MatchQueryRootType = new GraphQLObjectType({
    name: 'MatchQuery',
    description: 'Listing Application Schema Query Root',
    fields: () => ({
        matchDetails: {
            type: GraphQLList(CricketMatch),
            description: 'Get match details matchId',
            args: {
              match_id: { type: GraphQLString },
            },
            resolve(parentValue, args) {
              return getMatchById(args.match_id); 
            },
        },
        matchListByDate: {
            type: GraphQLList(CricketMatch),
            description: 'Get match listing',
            args: {
              from_date: { type: GraphQLString },
              to_date: { type: GraphQLString },
            },
            resolve(parentValue, args) {
              return getMatchesByDate(args.from_date, args.to_date); 
            },
        },
    }),
});

export default MatchQueryRootType;