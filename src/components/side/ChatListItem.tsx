import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const ChatListItem = ({ userId, id, title, body }: Props) => {
  const fetchMessages = async (roomId: number) => {
    try {
      const resp = await fetch(
        `${process.env.REACT_APP_API_URL}/rooms/${roomId}/history`,
        { credentials: 'include' }
      );
      const messages = await resp.json();
      //setMessages
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    // fetchMessages()
  };

  return (
    <ListGroup.Item style={{ cursor: 'pointer' }} onClick={handleClick}>
      <div className='d-flex'>
        <Image
          roundedCircle
          style={{ height: '40px', width: '40px' }}
          src='/assets/avatar.jpeg'
        />
        <div className='ms-3'>
          <p className='mb-0'>Name of the chat</p>
          <p>last message</p>
        </div>
        <div className='ms-auto'>
          <p className='mb-0'>last time</p>
          <p>unread</p>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default ChatListItem;
