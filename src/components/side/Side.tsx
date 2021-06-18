import { Col } from 'react-bootstrap';
import ChatList from './ChatList';
import React from 'react';

interface Msg {
  text: string;
  createdAt: string;
  updatedAt: string;
  senderId: string;
}
interface Props {
  setMsgHistory: React.Dispatch<React.SetStateAction<Msg[]>>;
}
const Side = ({ setMsgHistory }: Props) => {
  return (
    <Col style={{ height: '100%' }} sm={4} className='bg-info px-0'>
      <ChatList setMsgHistory={setMsgHistory} />
    </Col>
  );
};

export default Side;
