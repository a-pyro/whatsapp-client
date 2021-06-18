// import { Avatar, IconButton } from "@material-ui/core";
import styled from 'styled-components';
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import AttachFileIcon from "@material-ui/icons/AttachFile";
// import InsertEmoticonIcon from "@material-ui/icons";
// import MicIcon from "@material-ui/icons/Mic";
import { useState, useRef } from 'react';
import MsgItem from './MsgItem';

interface Msg {
  text: string;
  createdAt: string;
  updatedAt: string;
  senderId: string;
}
interface Props {
  msgHistory: Msg[];
}

const MsgList = ({ msgHistory }: Props) => {
  // const [input, setInput] = useState("");
  // const endOfMessagesRef = useRef(null);

  // const getRooms = async () => {
  //   try {
  //     const getRooms = await fetch(
  //       process.env.REACT_APP_API_URL + '/users/rooms',
  //       {
  //         credentials: 'include',
  //       }
  //     );
  //     if (getRooms.ok) {
  //       const rooms = await getRooms.json();
  //       // console.log(rooms);
  //       return rooms;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // <MsgItem
  //   key={message._id}
  //   user={message.senderId}
  //   message={message.text}
  //   createdAt={message.createdAt}
  // />;

  // const showMessages = async () => {
  //   const getMessages = await getRooms();
  //   const getText = getMessages.map((room) => room.chatHistory);
  //   console.log(getText);
  //   if (getMessages) {
  //     return getText.map((message) => (
  //       <MsgItem
  //         key={message._id}
  //         user={message.senderId}
  //         message={message.text}
  //         createdAt={message.createdAt}
  //       />
  //     ));
  //   }
  // };

  // const scrollToBottom = () => {
  //   endOfMessagesRef.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //   });
  // };

  return (
    <Container>
      <MessageContainer>
        {msgHistory.map((m) => (
          <MsgItem key={m.createdAt} {...m} />
        ))}
        {/* [{showMessages()}] */}
        {/* <EndOfMessage ref={endOfMessagesRef} /> */}
      </MessageContainer>
      {/* <InputContainer>
        <InsertEmoticonIcon />
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <button hidden disabled={!input} type="submit">
          Send Message
        </button>
        <MicIcon />
      </InputContainer> */}
    </Container>
  );
};

export default MsgList;

const Container = styled.div``;

const Input = styled.div`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 1000;
`;

const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 1000;
  top: 0;
  display: flex;
  padding: 11px;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;
  > h3 {
    margin-bottom: 3px;
  }
  > p {
    font-size: 14px;
    color: gray;
  }
`;

const EndOfMessage = styled.div`
  margin-top: 50px;
`;

const HeaderIcons = styled.div``;

const MessageContainer = styled.div`
  padding: 30px;
  background-color: #e5ded8;
  min-height: 90vh;
`;
