import React, { useState } from 'react';
import styled from 'styled-components';
import { Column } from '../Styles/StyledComponents';

const CenterContainer = styled(Column)`
  align-items: center;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const ContactContainer = styled(Column)`
  width: 30vw;
  padding: 30px 60px;
    align-items: center;

  background-color: #121212;
  border-radius: 10px;
  color: white;
  
  @media (max-width: 768px) {
    width: 70vw;
    padding: 10px 30px;
  }
`;
const Title = styled.h2`
  margin: 30px;
  
  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 15px;
  }
`;

const Input = styled.input`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  background-color: #00A7AA;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #00ced1;
  }
`;

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const formattedMessage = `Hey my name is ${name}\n${message}`;
    const url = `mailto:jktemple.games@gmail.com?subject=Contact%20From%20Portfolio&body=${encodeURIComponent(formattedMessage)}`;
    window.open(url);
  };

  return (
    <CenterContainer>
      <ContactContainer>
        <Title>Contact Me</Title>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleSubmit}>Reach Out Via Email</Button>
      </ContactContainer>
    </CenterContainer>
  );
};

export default ContactMe;