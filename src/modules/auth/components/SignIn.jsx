import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Form,
  ButtonToolbar,
  Button
} from 'rsuite';

function SignIn(props) {
  const { loading, login, history } = props;
  const [formValue, setFormValue] = useState({
    input: '',
    password: ''
  });

  function loginHandle(e) {
    e.preventDefault();

    login(formValue);
  }

  return (
    <div style={{ textAlign: 'center', margin: 20 }}>
      <Form formValue={formValue} onChange={setFormValue}>
        <FormGroup>
          <ControlLabel>Нэвтрэх нэр</ControlLabel>
          <FormControl name='input' placeholder='Нэвтрэх нэр' />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Нууц үг</ControlLabel>
          <FormControl
            name='password'
            type='password'
            res
            placeholder='Нууц үг'
          />
        </FormGroup>
        <ButtonToolbar>
          <Button
            appearance='primary'
            type='submit'
            loading={loading}
            onClick={loginHandle}
          >
            Нэвтрэх
          </Button>
          <Button
            appearance='primary'
            type='submit'
            color='red'
            onClick={() => history.push('/sign-up')}
          >
            Бүртгүүлэх
          </Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
}

export default SignIn;
