import { Form, Container, Row, Col, Button } from 'react-bootstrap';
// import { History } from 'history';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  // history: History;
  mode: string;
}
interface FormFields {
  email: string;
  password: string;
}

const LoginRegister = ({ mode }: Props) => {
  const history = useHistory();
  const [fields, setFields] = useState<FormFields>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.type;
    const value = e.target.value;
    setFields({ ...fields, [key]: value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const resp = await fetch(process.env.REACT_APP_API_URL + '/login', {
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  };

  return (
    <Container fluid style={{ background: 'teal' }}>
      <Row className='justify-content-center align-items-center min-vh-100'>
        <Col sm={6}>
          <h4 className='mb-4 text-white'>
            Please {mode === 'login' ? 'login' : 'register'}
          </h4>
          <div className='d-flex flex-column'>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  className='rounded-pill'
                  type='email'
                  placeholder='Enter email'
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword' className='mt-2'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  className='rounded-pill'
                  type='password'
                  placeholder='Password'
                />
              </Form.Group>

              <Button
                variant='warning'
                onClick={() => history.push(`/login`)}
                className='rounded-pill mt-3'
                type='submit'
              >
                {' '}
                {mode === 'login' ? 'Login' : 'Register'}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRegister;
