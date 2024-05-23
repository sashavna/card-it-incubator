import React from 'react';
import './App.css';
import styled from 'styled-components';
import { ImageComponent } from './components/MyImage.styled';
import picture from './assets/img/desrt.jpg'
import { HeaderText } from './components/Headline.styled';
import { Description } from './components/Description.styled';


function App() {
  return (
    <div className="App">
        <Rectangle>
            <ImageComponent src={picture} alt='desert image'/>
            <HeaderText>Headline</HeaderText>
            <Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Description>
        </Rectangle>
    </div>
  );
}

export default App;

const Rectangle = styled.div `
    height: 350px;
    width: 300px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
`
