import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getAnswers} from '../../store/actions';
import {Spinner} from '../../components/spinner';

const mapStateToProps = (state, {question}) => ({
  answering: state.questions.status && state.questions.status.answering === question.id,
});

const mapDispatchToProps = dispatch => ({
  getAnswers: questionId => dispatch(getAnswers(questionId)),
});

class Answers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
    };
  }

  componentWillMount() {
    const {question} = this.props;
    this.props.getAnswers(question.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loading: false});
  }

  render() {
    const {question, answering} = this.props;
    const {loading} = this.state;

    return (
      <div className="panel-body">
        {loading ? <Spinner /> : (
          <div>
            <ul className="list-group">
              {question.answers.map((answer, i) => (
                <li className="list-group-item" key={i}>{answer.answer}</li>
              ))}
              {answering ? <li className="list-group-item" key={question.answers.length}><Spinner /></li> : null}
            </ul>
            {!answering && question.answers.length === 0 ? 'No answers yet!' : null}
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
