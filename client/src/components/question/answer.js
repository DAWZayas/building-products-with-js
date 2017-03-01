import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteAnswer} from '../../store/actions';
import {Spinner} from '../../components/spinner';

const mapStateToProps = state => ({
  deleting: state.questions.deleting || {},
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onDeleteAnswer: payload => dispatch(deleteAnswer(payload)),
});

class Answer extends Component {

  render() {
    const {questionId, answer, user, deleting, onDeleteAnswer} = this.props;

    const onDeleteAnswerClick = () => onDeleteAnswer({
      questionId,
      answerId: answer.id,
    });

    const printDeleteAnswer = () => {
      if (answer.user && user.id && answer.user === user.id) {
        if (!deleting[answer.id]) {
          return (
            <button className="btn btn-sm btn-danger pull-right" onClick={() => onDeleteAnswerClick()} >
              <span className="glyphicon glyphicon-trash action-icon" />
            </button>
          );
        } else {
          return <span className="pull-right"><Spinner /> </span>;
        }
      } else {
        return null;
      }
    };

    return (
      <li className="list-group-item" style={{paddingBottom: '20px'}}>
        {answer.answer}
        {
          printDeleteAnswer()
        }
      </li>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
