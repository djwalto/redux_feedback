import { connect } from 'react-redux';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

// Table of all surveys submitted by user
// Ordered by newest submission first
function SurveyList(props) {
  return (
    <section>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Survey Id</th>
            <th>Feeling</th>
            <th>Comprehension</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Delete</th>
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
              <td>
                <Button variant="danger" key={survey.id}>
                  Delete
                </Button>
              </td>
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

export default connect(mapStateToProps)(SurveyList);
