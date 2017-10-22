import _, { range } from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../actions/index';

class RegisterForm extends Component {
  onRegisterSubmit(values, dispatch) {
    const props = {
      edLevel: values.education,
      gradYear: values.gradYear,
      school: values.school,
      state: values.state,
      registered: true
    };
    const { userInfo, history } = this.props;
    return dispatch(updateUser(props, userInfo._id, history));
  }

  renderStates() {
    const states = ['--', 'NJ', 'NY'];
    return _.map(states, state => {
      return (
        <option key={state} value={state}>
          {state}
        </option>
      );
    });
  }

  renderYears() {
    var years = range(2018, 2026);
    return _.map(years, year => {
      return (
        <option key={year} value={year}>
          {year}
        </option>
      );
    });
  }

  render() {
    const { edLevel, handleSubmit } = this.props;

    return (
      <form
        className="register-form"
        onSubmit={handleSubmit(this.onRegisterSubmit.bind(this))}
      >
        <h2>Create Account</h2>
        <div className="field-wrapper">
          <div className="field-label">
            <label>Current Education Level:</label>
          </div>
          <label className="radio-option">
            <Field
              name="edLevel"
              component="input"
              type="radio"
              value="Middle School"
            />{' '}
            Middle School
          </label>
          <label className="radio-option">
            <Field
              name="edLevel"
              component="input"
              type="radio"
              value="High School"
            />{' '}
            High School
          </label>
          <label className="radio-option">
            <Field
              name="edLevel"
              component="input"
              type="radio"
              value="College"
            />{' '}
            College
          </label>
          <label className="radio-option">
            <Field
              name="edLevel"
              component="input"
              type="radio"
              value="Other"
            />{' '}
            N/A
          </label>
        </div>
        {edLevel &&
          edLevel !== 'Other' && (
            <div className="grid">
              <div className="field-wrapper col-6_sm-12">
                <div className="field-label">
                  <label>School:</label>
                </div>
                <Field
                  name="school"
                  component="input"
                  type="text"
                  placeholder="School Name"
                />
              </div>
              <div className="field-wrapper col-3_sm-12">
                <div className="field-label">
                  <label>State:</label>
                </div>
                <Field name="state" component="select">
                  {this.renderStates()}
                </Field>
              </div>
              <div className="field-wrapper col-3_sm-12">
                <div className="field-label">
                  <label>Graduation Year:</label>
                </div>
                <Field name="gradYear" component="select">
                  {this.renderYears()}
                </Field>
              </div>
            </div>
          )}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    );
  }
}

const selector = formValueSelector('registerForm');
RegisterForm = connect(state => {
  return {
    edLevel: selector(state, 'edLevel')
  };
})(RegisterForm);

export default (RegisterForm = reduxForm({
  form: 'registerForm',
  updateUser
})(withRouter(RegisterForm)));
