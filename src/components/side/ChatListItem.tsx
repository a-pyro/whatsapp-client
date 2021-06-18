import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

interface User {
  createdAt: string;
  email: string;
  updatedAt: string;
  _id: string;
}
interface Msg {
  text: string;
  createdAt: string;
  updatedAt: string;
  senderId: string;
}
interface Props {
  usersId: User[];
  _id: string;

  setMsgHistory: React.Dispatch<React.SetStateAction<Msg[]>>;
}
const ChatListItem = ({ _id, usersId, setMsgHistory }: Props) => {
  const [selected, setSelected] = useState('');

  const fetchMessages = async (roomId: string) => {
    try {
      const resp = await fetch(
        `${process.env.REACT_APP_API_URL}/rooms/${roomId}/history`,
        { credentials: 'include' }
      );
      const messages = await resp.json();
      console.log(messages);
      setSelected(roomId);
      setMsgHistory(messages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    fetchMessages(_id);
  };
  const recieverEmail = usersId.find(
    (u) => u._id !== localStorage.getItem('user_logged_in')
  )?.email;
  console.log(recieverEmail);
  return (
    // className => selected === roomId ? 'selected' : ''
    <ListGroup.Item
      className={selected === _id ? 'bg-secondary' : ''}
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
    >
      <div className='d-flex'>
        <Image
          roundedCircle
          style={{ height: '40px', width: '40px' }}
          src='/assets/avatar.jpeg'
        />
        <div className='ms-3'>
          <p className='mb-0'>{recieverEmail}</p>
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
