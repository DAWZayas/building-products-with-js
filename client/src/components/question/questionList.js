import React from 'react';
import InfiniteScroll from 'redux-infinite-scroll';
import {connect} from 'react-redux';

import Question from './question';
import {getMoreQuestions} from '../../store/actions';
import {Spinner} from '../../components/spinner';

const mapStateToProps = state => ({
  hasMore: state.questions.hasMore,
  loadingMore: state.questions.status === 'loading',
  questions: state.questions.questions,
  filtered: state.questions.filtered,
});


const mapDispatchToProps = dispatch => ({
  loadMore: payload => dispatch(getMoreQuestions(payload)),
});

const QuestionList = ({questions, filtered, loadMore, hasMore, loadingMore}) => {

  const onLoadMore = () => loadMore({
    skip: questions.length,
    limit: 10,
    match: filtered,
  });

  return (
    <div>
      {!hasMore && questions.length === 0 ?
        <div>{filtered ? 'No questions match your criteria' : 'No questions yet!'}</div> :
        <InfiniteScroll
          elementIsScrollable={false}
          loadMore={onLoadMore}
          hasMore={hasMore}
          loadingMore={loadingMore}
          loader={<Spinner />}
        >
          {questions.map((question, index) => (
            <Question key={index} question={question} />
          ))}
        </InfiniteScroll>
      }
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
