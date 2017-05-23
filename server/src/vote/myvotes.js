// npm packages
import passport from 'passport';

// our packages
import {Vote} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/vote/me', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get the votes
    const votes = await Vote.filter({userId: req.user.id});
    res.send(votes);
  }));
};
