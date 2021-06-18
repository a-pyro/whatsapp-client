import styled from 'styled-components';
import moment from 'moment';

interface Props {
  text: string;
  createdAt: string;
  updatedAt: string;
  senderId: string;
}

// const MsgItem = ({ user, message, createdAt }: any) => {
const MsgItem = ({ text, updatedAt, createdAt, senderId }: Props) => {
  const userLoggedIn = localStorage.getItem('user_logged_in');
  console.log(userLoggedIn);

  const TypeOfMessage = senderId === userLoggedIn ? Sender : Receiver;

  return (
    <Container>
      <TypeOfMessage>
        {text}
        {/* <Timestamp>
          {createdAt
            ? moment(createdAt.toDate().getTime()).format('LT')
            : '...'}
        </Timestamp> */}
      </TypeOfMessage>
    </Container>
  );
};

export default MsgItem;

const Container = styled.div``;

const MessageElement = styled.p`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;
const Receiver = styled(MessageElement)`
  text-align: left;
  background-color: whitesmoke;
`;

const Timestamp = styled.span`
  color: gray;
  padding: 10px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;
