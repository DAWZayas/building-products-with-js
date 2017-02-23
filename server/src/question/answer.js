// npm packages
import passport from 'passport';
import uuidV1 from 'uuid/v1';

// our packages
import {Question} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/question/:id/answer', passport.authenticate('jwt', {session: false}),
  asyncRequest(async (req, res) => {
    const {id} = req.params;
    // get user input
    const {answer} = req.body;

    // make sure text is not empty
    if (answer !== undefined && !answer.length) {
      res.status(400).send({error: 'Answer should be not empty!'});
      return;
    }

    // get the question
    const question = await Question.get(id);

    // double-check check if question exists
    if (!question) {
      res.status(400).send({error: 'Question not found!'});
      return;
    }

    // append new answer
    question.answers.push({id: uuidV1(), answer, user: req.user.id});

    // try saving
    await question.save();

    // send created question back
    res.send(question);
  }));

  app.delete('/api/question/:questionId/answer/:answerId', passport.authenticate('jwt', {session: false}),
  asyncRequest(async (req, res) => {
    const {questionId, answerId} = req.params;
    const user = req.user.id;

    // get the question
    const question = await Question.get(questionId);

    // double-check check if question exists
    if (!question) {
      res.status(400).send({error: 'Question not found!'});
      return;
    }

    // get the answer
    const answer = question.answers.filter(a => a.id === answerId)[0];

    // double-check check if question exists
    if (!answer) {
      res.status(400).send({error: 'Answer not found!'});
      return;
    }

    // double-check check if answer belongs to user
    if (answer.user !== user) {
      res.status(400).send({error: 'Permission denied!'});
      return;
    }

    // delete the answer
    question.answers = question.answers.filter(a => a.id !== answerId);

    // try saving
    await question.save();

    // send created question back
    res.send(question);
  }));
};
