// npm packages
import passport from 'passport';

// our packages
import {Vote} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.put('/api/vote/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {

    const {id} = req.params;

    // get user input
    const {vote} = req.body;

    // validate vote
    if (!vote || !Number.isInteger(parseInt(vote, 10))) {
      res.status(400).send({error: 'Vote should be an integer'});
      return;
    }

    // get the vote
    const voteDB = await Vote.get(id);

    // double-check check if question exists
    if (!voteDB) {
      res.status(400).send({error: 'Vote not found!'});
      return;
    }

    // check if user is the owner
    if (req.user.id !== voteDB.userId) {
      res.status(403).send({error: 'Not enough rights to change the vote!'});
      return;
    }

    voteDB.vote = vote;

    // try saving
    await voteDB.save();

    // send created question back
    res.send(voteDB);
  }));
};
