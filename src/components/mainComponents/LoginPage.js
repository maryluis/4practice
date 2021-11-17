import {
  Form, Input, FormGroup, Label, Button, Col, Card, CardTitle,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { actionSendLogin } from '../../redux-saga/actionsCreaters';

function LoginPage() {
  const dispatch = useDispatch();
  const [login, changeLogin] = useState('');
  const [password, changePassword] = useState('');
  const handleChange = useCallback((e) => {
    if (e.target.name === 'login') {
      changeLogin(e.target.value);
    } else {
      changePassword(e.target.value);
    }
  }, []);
  const handleSubmit = useCallback(() => {
    dispatch(actionSendLogin({ login, password }));
  }, [login, password]);
  return (
    <Card className="p-5">
      <CardTitle className="center" tag="h4">Sign in to continue</CardTitle>
      <Form>
        <FormGroup className="m-3" row>
          <Label sm={2} for="login">Login</Label>
          <Col sm={8}>
            <Input
              onChange={handleChange}
              id="login"
              name="login"
              placeholder="login"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup className="m-3" row>
          <Label sm={2} for="password">Password</Label>
          <Col sm={8}>
            <Input
              onChange={handleChange}
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
          </Col>
        </FormGroup>
        <FormGroup className="center">
          <Button color="secondary" onClick={handleSubmit}>Send</Button>
        </FormGroup>
      </Form>
    </Card>
  );
}
export default LoginPage;
