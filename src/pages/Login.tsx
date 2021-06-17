import { Form, Container, Row, Col, Button } from 'react-bootstrap';
// import { History } from 'history';
import { useState } from 'react';
import { History } from 'history';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

interface FormFields {
  email: string;
  password: string;
}

interface Props {
  history: History;
}

const Login = ({ history }: Props) => {
  const [fields, setFields] = useState<FormFields>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.type;
    const value = e.target.value;
    setFields({ ...fields, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resp = await fetch(process.env.REACT_APP_API_URL + `/login`, {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (resp.ok) {
        let user = await resp.json();
        console.log(user);
        // localStorage.setItem('user_logged_in', user._id);
        toast('Yay! Redirecting to wyou chats!');
        setTimeout(() => {
          history.push('/home');
        }, 2000);
      } else {
        toast.error('something bad happend, try again');
        setTimeout(() => {
          history.push('/login');
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container fluid style={{ background: 'teal' }}>
      <Row className='justify-content-center align-items-center min-vh-100'>
        <Col sm={6}>
          <h4 className='mb-4 text-white'>Please Login</h4>
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
                className='rounded-pill mt-3'
                type='submit'
              >
                {' '}
                Login
              </Button>
            </Form>
          </div>
        </Col>
        <ToastContainer />
      </Row>
    </Container>
  );
};

export default Login;
