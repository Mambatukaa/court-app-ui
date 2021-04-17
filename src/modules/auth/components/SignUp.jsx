import React from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Form,
  ButtonToolbar,
  Button
} from 'rsuite';

function SignUp() {
  function TextField(props) {
    const { name, label, accepter, ...rest } = props;
    return (
      <FormGroup>
        <ControlLabel>{label} </ControlLabel>
        <FormControl name={name} accepter={accepter} {...rest} />
      </FormGroup>
    );
  }

  return (
    <div style={{ textAlign: 'left', margin: 20 }}>
      <Form>
        <TextField name='name' label='Нэвтрэх нэр' />
        <TextField name='email' label='email' />
        <TextField name='password' label='Password' type='password' />
        <ButtonToolbar>
          <Button appearance='primary' type='submit'>
            Нэвтрэх
          </Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
}

export default SignUp;
