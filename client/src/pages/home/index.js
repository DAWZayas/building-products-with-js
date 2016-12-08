// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';

// our packages
import {getAllQuestions} from '../../store/actions';
import {QuestionList, QuestionSingle} from '../../components/question';
import {Spinner} from '../../components/spinner';

const mapStateToProps = state => ({
  questions: state.questions.questions,
  status: state.questions.status,
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(getAllQuestions()),
});


class Home extends Component {

  componentWillMount() {
    this.props.fetchQuestions();
  }

  render() {
    const {doAnswer, questions, status} = this.props;

    return (
      <div className="container">
        {status === 'loading' ? <Spinner /> :
        <MediaQuery query="(min-width: 992px)">
          {(matches) => {
            if (matches) {
              return <QuestionList questions={questions} />;
            } else {
              return <QuestionSingle questions={questions} />;
            }
          }}
        </MediaQuery>
      }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
