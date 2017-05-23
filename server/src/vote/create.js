// npm packages
import passport from 'passport';

// our packages
import {Question, Vote} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/vote', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get user input
    const {questionId, vote} = req.body;

    // make sure questionId is not empty
    if (!questionId) {
      res.status(400).send({error: 'questionId should be present!'});
      return;
    }

    // get the question
    const question = await Question.get(questionId);

    // double-check check if question exists
    if (!question) {
      res.status(400).send({error: 'Question not found!'});
      return;
    }


    // validate vote
    if (!vote || !Number.isInteger(parseInt(vote, 10))) {
      res.status(400).send({error: 'Vote should be an integer'});
      return;
    }

    // save new vote
    const voteDB = new Vote({
      questionId,
      vote: parseInt(vote, 10),
      userId: req.user.id,
    });
    await voteDB.save();

    // send created question back
    res.send(voteDB);
  }));
};
