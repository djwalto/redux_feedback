import { connect } from 'react-redux';
import React, { Component } from 'react';

//This is a function component. It cant have local state, nor methods!
//You do have access to props sent in, though.
//the return is the same as render in a class component
//no `this`
function SurveyList(props) {
  return (
    <section>
      <h2>All Surveys</h2>
      <ul>
        {props.reduxStore.surveyReducer.map((survey, index) => (
          <li key={index}>
            {survey.feeling} {survey.understanding} {survey.support}{' '}
            {survey.comments}
          </li>
        ))}
      </ul>
    </section>
  );
}

const mapStateToProps = (reduxStore) => ({
  reduxStore,
});

// export default withRouter(BookList);
export default connect(mapStateToProps)(SurveyList);
