import { Col } from 'react-bootstrap';
import ChatList from './ChatList';

const Side = () => {
  return (
    <Col style={{ height: '100%' }} sm={4} className='bg-info px-0'>
      <ChatList />
    </Col>
  );
};

export default Side;
