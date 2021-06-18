import { Col } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import styled from "styled-components";

// REACT ICONS

// import { TiArrowMaximise } from "react-icons/ti";
import { VscChromeMinimize } from "react-icons/vsc";
import { GrFormClose } from "react-icons/gr";
import { CgExpand } from "react-icons/cg";
import { HiPencilAlt } from "react-icons/hi";
import { HiStatusOnline } from "react-icons/hi";

// import { IoCloseOutline } from "react-icons/io";

const close = {
  borderColor: "red",
  backgroundColor: "red",
  margin: "0,20px,0",
};
const minimise = {
  borderColor: "yellow",
  backgroundColor: "yellow",
};
const expand = {
  borderColor: "green",
  backgroundColor: "green",
};

const Side = () => {
  let iconStyles = { color: "black", fontSize: "1em" };
  return (
    <Col style={{ height: "100%" }} sm={4} className="bg-info mx-0 px-0">
      <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <div className="buttonCMEgroup">
              <CMEbutton style={close} className="close">
                <GrFormClose style={iconStyles} />
              </CMEbutton>
              <CMEbutton style={minimise} className="minimise">
                <VscChromeMinimize style={iconStyles} />
              </CMEbutton>
              <CMEbutton style={expand} className="expand">
                <CgExpand style={iconStyles} />
              </CMEbutton>
            </div>
          </Nav>
          <Nav className="mr-auto">
            <button>
              <img
                className="profileImg"
                src="https://via.placeholder.com/20"
                alt="user profile"
              />
            </button>
            <button>
              <HiStatusOnline />
            </button>
            <button>
              <HiPencilAlt />
            </button>
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-0" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    </Col>
  );
};

export default Side;

const CMEbutton = styled.button`
  border-radius: 50%;
  color: red;
  font-size: 0.5em;
  border: 1px solid black;
  margin: 0, 5%, 0;

  .close {
    color: red;
    border-color: red;
    border: 1px solid red;
  }

  .minimise {
    color: red;
    border-color: red;
    border: 1px solid red;
  }

  .expand {
    color: red;
    border-color: red;
    border: 1px solid red;
  }
`;
