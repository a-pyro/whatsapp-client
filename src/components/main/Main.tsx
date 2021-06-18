import React from 'react';
import { Col } from 'react-bootstrap';
import InputBar from './InputBar';
import MsgList from './MsgList';

interface Msg {
  text: string;
  createdAt: string;
  updatedAt: string;
  senderId: string;
}
interface Props {
  setMsgTxt: React.Dispatch<React.SetStateAction<string>>;
  msgHistory: Msg[];
}
const Main = ({ setMsgTxt, msgHistory }: Props) => {
  return (
    <Col style={{ height: '100%' }} sm={8} className='bg-primary'>
      <MsgList msgHistory={msgHistory} />
      <InputBar setMsgTxt={setMsgTxt} />
    </Col>
  );
};

export default Main;
