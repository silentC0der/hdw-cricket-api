import { GraphQLString, GraphQLObjectType } from 'graphql';
import _ from 'lodash';

const CricketMatch = new GraphQLObjectType({
    name: 'matchDetails',
    description: 'This represents a cricket match details',
    fields: () => ({
      _id: { type: GraphQLString },
      comp_type: { type: GraphQLString },
      match_Id: { type: GraphQLString },
      teama_Id: { type: GraphQLString },
      teama: { type: GraphQLString },
      teama_short: { type: GraphQLString },
      teamb_Id: { type: GraphQLString },
      teamb: { type: GraphQLString },
      teamb_short: { type: GraphQLString },
      matchdate_gmt: { type: GraphQLString },
      matchdate_ist: { type: GraphQLString },
      end_matchdate_gmt: { type: GraphQLString },
      end_matchdate_ist: { type: GraphQLString },

    }),
});

export default CricketMatch;
