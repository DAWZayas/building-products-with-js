// npm packages
import React from 'react';
import MediaQuery from 'react-responsive';

// our packages
import {QuestionList, QuestionSingle} from '../../components/question';
import Filter from '../../components/filter';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-4 pull-right">
        <Filter />
      </div>
    </div>
    <div className="row" style={{marginTop: '20px'}}>
      <MediaQuery query="(min-width: 992px)">
        {(matches) => {
          if (matches) {
            return <QuestionList />;
          } else {
            return <QuestionSingle />;
          }
        }}
      </MediaQuery>
    </div>
  </div>
);

export default Home;
