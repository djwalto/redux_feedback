import { connect } from 'react-redux';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

//This is a function component. It cant have local state, nor methods!
//You do have access to props sent in, though.
//the return is the same as render in a class component
//no `this`
function SurveyList(props) {
  return (
    <section>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Survey Id</th>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Supported</th>
            <th>Comments</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.reduxStore.surveyReducer.map((survey, index) => (
            <tr>
              <td key={index}>{survey.id}</td>
              <td>{survey.feeling}</td>
              <td>{survey.understanding}</td>
              <td>{survey.support}</td>
              <td>{survey.comments}</td>
              <td>trash</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

const mapStateToProps = (reduxStore) => ({
  reduxStore,
});

// export default withRouter(BookList);
export default connect(mapStateToProps)(SurveyList);
