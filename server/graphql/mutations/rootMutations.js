import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
} from 'graphql';
import { updateMatch } from '../../controllers/cricket';
import CricketMatch from '../types/rootType';

const CricketMutationRootType = new GraphQLObjectType({
    name: 'CricketMutation',
    description: 'Change match',
    fields: () => ({
      updateMatch: {
        type: CricketMatch,
        description: 'update an existing match',
        args: {
          match_Id: { type: new GraphQLNonNull(GraphQLString) },
          comp_type: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parentValue, args) {
          return updateMatch(args);
        },
      },
    }),
  });
  
  export default CricketMutationRootType;