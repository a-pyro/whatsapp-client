import React from 'react';
import { Col } from 'react-bootstrap';
import InputBar from './InputBar';
interface Props {
  setMsgTxt: React.Dispatch<React.SetStateAction<string>>;
}
const Main = ({ setMsgTxt }: Props) => {
  return (
    <Col style={{ height: '100%' }} sm={8} className='bg-primary'>
      <InputBar setMsgTxt={setMsgTxt} />
    </Col>
  );
};

export default Main;
