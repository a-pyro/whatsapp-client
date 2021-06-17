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

const Register = ({ history }: Props) => {
  const [fields, setFields] = useState<FormFields>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.type;
    const value = e.target.value;
    setFields({ ...fields, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('fuck you');
    e.preventDefault();
    try {
      const resp = await fetch(process.env.REACT_APP_API_URL + `/register`, {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await resp.json();
      console.log(data);
      if (resp.ok) {
        toast('Yay! Youre registered, redirecting to login');
        setTimeout(() => {
          history.push('/login');
        }, 2000);
      } else {
        toast.error('Something went wrong! redirecting to landing');
        setTimeout(() => {
          history.push('/landing');
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
          <h4 className='mb-4 text-white'>Please Register</h4>
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
                Register
              </Button>
            </Form>
          </div>
        </Col>
        <ToastContainer />
      </Row>
    </Container>
  );
};

export default Register;
