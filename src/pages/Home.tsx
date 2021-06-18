import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Side from '../components/side/Side';
import Main from '../components/main/Main';

const Home = () => {
  const [user, setUser] = useState(null);

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
      <Row className='vh-100'>
        <Side />
        <Main />
      </Row>
    </Container>
  );
};

export default Home;
