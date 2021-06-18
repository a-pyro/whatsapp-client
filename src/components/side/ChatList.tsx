import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import ChatListItem from './ChatListItem';

interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ChatList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (() => {
      const resp = fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => resp.json())
        .then((data) => setUsers(data));
    })();
  }, []);
  console.log(users);
  return (
    <ListGroup style={{ height: '100%', overflow: 'auto' }}>
      {users.map((user: User) => (
        <ChatListItem key={user.id} {...user} />
      ))}
    </ListGroup>
  );
};

export default ChatList;
