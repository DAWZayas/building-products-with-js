// our packages
import create from './create';
import update from './update';
import myvotes from './myvotes';
import questionVotes from './questionVotes';

export default (app) => {
  create(app);
  update(app);
  myvotes(app);
  questionVotes(app);
};
