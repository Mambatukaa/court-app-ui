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
  const { loading, login, history, currentUser } = props;
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  function loginHandle(e) {
    e.preventDefault();

    login(formValue);
  }

  if (currentUser.username) {
    history.push('/courts');
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <Form formValue={formValue} onChange={setFormValue}>
        <FormGroup>
          <ControlLabel>Имэйл хаяг</ControlLabel>
          <FormControl name="email" placeholder="Email" />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Нууц үг</ControlLabel>
          <FormControl
            name="password"
            type="password"
            res
            placeholder="Нууц үг"
          />
        </FormGroup>
        <ButtonToolbar>
          <Button
            appearance="primary"
            type="submit"
            loading={loading}
            onClick={loginHandle}
          >
            Нэвтрэх
          </Button>
          <Button
            appearance="primary"
            type="submit"
            color="red"
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
