import React from "react";
import { Col } from "react-bootstrap";
import InputBar from "./InputBar";
import MsgList from "./MsgList";
interface Props {
  setMsgTxt: React.Dispatch<React.SetStateAction<string>>;
}
const Main = ({ setMsgTxt }: Props) => {
  return (
    <Col style={{ height: "100%" }} sm={8} className="bg-primary">
      <MsgList />
      <InputBar setMsgTxt={setMsgTxt} />
    </Col>
  );
};

export default Main;
