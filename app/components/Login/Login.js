import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { tabletDevice } from "../shared/MediaQueries";

import LoginSwitch from "./Login/LoginSwitch/LoginSwitch";

const LoginSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "LoginContainer" "ImageContainer";
  
  @media (min-width: ${tabletDevice}px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "LoginContainer ImageContainer";
  }
`;

const LoginContainer = styled.div`
  grid-area: LoginContainer;
  width: 260px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  grid-area: ImageContainer;
`;

class Login extends React.Component {
  state = {
    selectedForm: "Login"
  };
 

  componentDidMount() {
    this.updateForm(this.state.selectedForm);
  }

  updateForm = async (selectedForm) => {
    this.setState(() => ({
      selectedForm: selectedForm,
    }))
    console.log(`state is: ${this.state.selectedForm}`);

    if(selectedForm === 'Login') {
      console.log('I am rendering Login Component');
    }
    else {
      console.log('I am rendering SignUp Component');
    }
  }

  render() {
    const selectedForm = this.state;
    return (
      <LoginSection>
        <LoginContainer>
          <LoginSwitch selectedForm={selectedForm} onSelect={this.updateForm} />
        </LoginContainer>
        <ImageContainer>There is some random text</ImageContainer>
      </LoginSection>
    );
  }
}

export default Login;
