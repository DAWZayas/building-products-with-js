// our packages
import {Vote} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/vote/question/:questionId', asyncRequest(async (req, res) => {
    const {questionId} = req.params;

    // get the votes
    const votes = await Vote.filter({questionId});
    res.send(votes);
  }));
};
