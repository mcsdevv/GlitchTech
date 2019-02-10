import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { black, paleBlue } from "../../../shared/ColorPalette";
const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const ListItem = styled.li`
  display: inline-block;
  flex: 1 1 0;
`;

const FormLink = styled.a`
  display: block;
  position: relative;
  padding: 10px 25px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: ${props => (props.active ? "red" : "#ccc")};
  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #241e20;
  }
`;

const LoginSwitch = ({ selectedForm, onSelect }) => {
  return (
    <List>
      <ListItem>
        <FormLink
          active={selectedForm === "Login"}
          onClick={() => onSelect("Login")}
        >
          Login
        </FormLink>
      </ListItem>
      <ListItem>
        <FormLink
          active={selectedForm === "SignUp"}
          onClick={() => onSelect("SignUp")}
        >
          Sign Up
        </FormLink>
      </ListItem>
    </List>
  );
};

export default LoginSwitch;
