import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

interface Props {
  setMsgTxt: React.Dispatch<React.SetStateAction<string>>;
}

const InputBar = ({ setMsgTxt }: Props) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMsgTxt(text);
    setText('');
  };

  return (
    <Form onChange={handleSubmit} className=''>
      <Form.Group className='d-flex'>
        <Form.Control
          onChange={(e) => setText(e.target.value)}
          type='text'
          value={text}
          className='rounded-pill w-100'
        />
        <Button variant='primary' type='submit'>
          🚀
        </Button>
      </Form.Group>
    </Form>
  );
};

export default InputBar;
