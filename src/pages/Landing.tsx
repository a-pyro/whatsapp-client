import { MessageBox } from 'react-chat-elements';
import { SideBar } from 'react-chat-elements';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Login from './Login';
import { History } from 'history';

interface Props {
  history: History;
}

const Landing = ({ history }: Props) => {
  return (
    <Container fluid style={{ background: 'teal' }}>
      <Row className='justify-content-center align-items-center min-vh-100'>
        <Col sm={6}>
          <h1 className='mb-4 text-white'>Welcome to Whatsapp(Fake)</h1>
          <div className='d-flex flex-column'>
            <Button
              variant='warning'
              onClick={() => history.push(`/login`)}
              className='rounded-pill mb-3'
            >
              Login
            </Button>
            <Button
              variant='info'
              onClick={() => history.push(`/register`)}
              className='rounded-pill text-white'
            >
              Register
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
