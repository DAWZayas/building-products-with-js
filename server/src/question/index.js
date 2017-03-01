// our packages
import get from './get';
import create from './create';
import update from './update';
import deleteQuestion from './delete';
import close from './close';
import answer from './answer';

export default (app) => {
  get(app);
  create(app);
  update(app);
  deleteQuestion(app);
  close(app);
  answer(app);
};
