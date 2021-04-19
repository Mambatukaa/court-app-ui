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

  const handleSignUp = e => {
    e.preventDefault();

    props.signUp({
      username: 'hello',
      email: 'boldoo@gmail.com',
      password: 'world'
    });
  };

  const TextField = props => {
    const { name, label, accepter, ...rest } = props;
    return (
      <FormGroup>
        <ControlLabel>{label} </ControlLabel>
        <FormControl name={name} accepter={accepter} {...rest} />
      </FormGroup>
    );
  };

  return (
    <div style={{ textAlign: 'left', margin: 20 }}>
      <Form
        formValue={formValue}
        onChange={e => {
          setFormValue(e);
        }}
      >
        <TextField name='username' label='Нэвтрэх нэр' />
        <TextField name='email' label='Имэйл' />
        <TextField name='password' label='Нууц үг' type='password' />
        <ButtonToolbar>
          <Button appearance='primary' type='submit' onClick={handleSignUp}>
            Бүртгүүлэх
          </Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
}

export default SignUp;
