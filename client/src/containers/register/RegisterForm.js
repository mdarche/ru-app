import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { updateUser } from '../../actions/index';

class RegisterForm extends Component {
  onRegisterSubmit(props, dispatch) {
    return dispatch(updateUser(props, this.props.userInfo._id));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onRegisterSubmit.bind(this))}>
          <div>
            <label>School:</label>
            <Field
              name="school"
              component="input"
              type="text"
              placeholder="school"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'registerForm',
  updateUser
})(RegisterForm);
