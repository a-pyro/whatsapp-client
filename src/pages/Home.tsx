import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Side from '../components/side/Side';
import Main from '../components/main/Main';
import { io } from 'socket.io-client';

const ENDPOINT = process.env.REACT_APP_API_URL;

const socket = io(ENDPOINT!, { transports: ['websocket'] });

const Home = () => {
  const [user, setUser] = useState(null);
  const [msgHistory, setMsgHistory] = useState([]);

  //fetch users info
  useEffect(() => {
    (async () => {
      const resp = await fetch(process.env.REACT_APP_API_URL + '/users/me', {
        credentials: 'include',
      });

      const user = await resp.json();
      setUser(user);
      console.log(user);
    })();
  }, []);

  return (
    <Container fluid>
      <Row noGutters className='vh-100'>
        <Side />
        <Main />
      </Row>
    </Container>
  );
};

export default Home;
