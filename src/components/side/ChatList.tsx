import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import ChatListItem from './ChatListItem';

interface Room {
  usersId: User[];
  _id: string;
}
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
  setMsgHistory: React.Dispatch<React.SetStateAction<Msg[]>>;
}

const ChatList = ({ setMsgHistory }: Props) => {
  const [rooms, setRooms] = useState([] as Room[]);

  useEffect(() => {
    (() => {
      const resp = fetch(`${process.env.REACT_APP_API_URL}/users/rooms`, {
        credentials: 'include',
      })
        .then((resp) => resp.json())
        .then((data) => setRooms(data));
    })();
  }, []);
  console.log(rooms);
  return (
    <ListGroup style={{ height: '100%', overflow: 'auto' }}>
      {rooms.map((room: Room) => (
        <ChatListItem key={room._id} {...room} setMsgHistory={setMsgHistory} />
      ))}
    </ListGroup>
  );
};

export default ChatList;
