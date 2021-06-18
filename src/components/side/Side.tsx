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
// import { VscChromeMinimize } from "react-icons/vs";
// import { IoCloseOutline } from "react-icons/io";

const Side = () => {
  return (
    <Col style={{ height: "100%" }} sm={4} className="bg-info mx-0 px-0">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="buttonCMEgroup">
              <CMEbutton className="close">X</CMEbutton>
              <CMEbutton className="minimise">-</CMEbutton>
              <CMEbutton className="expand">
                {/* ^ <IoCloseOutline /> */}
              </CMEbutton>
            </div>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
  color: white;
  border-color: white;
  font-size: 0.5em;
  border: 1px solid black;
  border-radius: 3px;

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
