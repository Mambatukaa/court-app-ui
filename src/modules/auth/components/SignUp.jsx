import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Form,
  ButtonToolbar,
  Button
} from 'rsuite';

function SignUp(props) {
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { loading, signUp, history } = props;

  const handleSignUp = e => {
    e.preventDefault();

    signUp(formValue);
  };

  return (
    <div style={{ textAlign: 'center', margin: 20 }}>
      <Form formValue={formValue} onChange={setFormValue}>
        <FormGroup>
          <ControlLabel>Нэвтрэх нэр</ControlLabel>
          <FormControl name='username' placeholder='Нэвтрэх нэр' />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Имэйл</ControlLabel>
          <FormControl name='email' placeholder='Имэйл' />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Нууц үг</ControlLabel>
          <FormControl
            name='password'
            type='password'
            placeholder='Нууц үг'
            res
          />
        </FormGroup>

        <ButtonToolbar>
          <Button
            appearance='primary'
            color='red'
            type='submit'
            loading={loading}
            onClick={handleSignUp}
          >
            Бүртгүүлэх
          </Button>
          <Button onClick={() => history.goBack()}>Нэвтрэх</Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
}

export default SignUp;
