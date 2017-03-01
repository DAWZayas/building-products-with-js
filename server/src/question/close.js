// npm packages
import passport from 'passport';

// our packages
import {Question} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.put('/api/question/:id/close', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get requested question
    const question = await Question.get(req.params.id);

    // check if user is the owner
    if (req.user.id !== question.owner) {
      res.status(403).send({error: 'Not enough rights to close the question!'});
      return;
    }

    // close
    question.close = true;

    // try saving
    await question.save();

    // send created question back
    res.send(question);
  }));
};
