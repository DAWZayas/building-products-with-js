// npm packages
import React from 'react';
import {connect} from 'react-redux';

import {getMoreQuestions} from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  getFilteredQuestions: payload => dispatch(getMoreQuestions(payload)),
});

const Filter = ({getFilteredQuestions}) => {
  const onFilter = e => getFilteredQuestions({
    skip: 0,
    limit: 10,
    match: e.target.value,
    reset: true,
  });

  return (
    <div className="input-group">
      <span className="input-group-addon">
        <span className="glyphicon glyphicon-search" />
      </span>
      <input type="text" className="form-control" placeholder="Search" onChange={onFilter} />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Filter);
