import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteAnswer, editAnswer} from '../../store/actions';
import {Spinner} from '../../components/spinner';

const mapStateToProps = state => ({
  deleting: state.questions.deleting || {},
  updating: state.questions.updating || {},
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onDeleteAnswer: payload => dispatch(deleteAnswer(payload)),
  onEditAnswer: payload => dispatch(editAnswer(payload)),
});

class Answer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      okButtonDisabled: true,
    };
  }

  render() {
    let answerText;
    const {questionId, answer, user, deleting, updating, onDeleteAnswer, onEditAnswer} = this.props;

    const onDeleteAnswerClick = () => onDeleteAnswer({
      questionId,
      answerId: answer.id,
    });

    const onEditAnswerClick = (e) => {
      e.preventDefault();
      const {answer} = this.props;
      this.setState({
        editing: true,
      });
      answerText.value = answer.answer;
    };

    const onOkAnswerClick = (e) => {
      e.preventDefault();
      this.setState({
        editing: false,
        okButtonDisabled: true,
      });
      onEditAnswer({
        questionId,
        answer: {...answer, answer: answerText.value},
        oldAnswer: answer.answer,
      });
    };

    const onCancelAnswerClick = (e) => {
      e.preventDefault();
      this.setState({
        editing: false,
        okButtonDisabled: true,
      });
    };

    const checkOkButtonState = (e) => {
      e.preventDefault();
      this.setState({
        okButtonDisabled: answerText.value === '' || answerText.value === answer.answer,
      });
    };

    const printButtons = () => {
      if (answer.user && user.id && answer.user === user.id) {
        if (!deleting[answer.id]) {
          return (
            <span>
              <button style={{marginLeft: '10px'}} className="btn btn-sm btn-danger pull-right" onClick={(e) => onDeleteAnswerClick(e)} >
                <span className="glyphicon glyphicon-trash action-icon" />
              </button>
              <button className="btn btn-sm btn-warning pull-right" onClick={(e) => onEditAnswerClick(e)} >
                <span className="glyphicon glyphicon-edit action-icon" />
              </button>
            </span>
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
        <div className={`${this.state.editing ? 'hidden' : ''}`}>
          {!updating[answer.id] ? answer.answer : <Spinner />}
          {!updating[answer.id] ? printButtons() : null}
        </div>
        <div className={`input-group ${this.state.editing ? '' : 'hidden'}`}>
          <input className="form-control" ref={(t) => { answerText = t; }} onChange={e => checkOkButtonState(e)} />
          <span className="input-group-btn">
            <button className="btn btn-danger" type="button" onClick={e => onCancelAnswerClick(e)}><span className="glyphicon glyphicon-remove" /></button>
            <button className="btn btn-success" type="button" onClick={e => onOkAnswerClick(e)} disabled={this.state.okButtonDisabled}>
              <span className="glyphicon glyphicon-ok" />
            </button>
          </span>
        </div>
      </li>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
