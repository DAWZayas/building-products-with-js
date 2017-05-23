import {thinky} from './thinky';

export const Vote = thinky.createModel('Vote', {
  questionId: thinky.type.string().required(),
  userId: thinky.type.string().required(),
  vote: thinky.type.number().required(),
});
